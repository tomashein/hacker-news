import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { News } from '@types';

const useNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const [filter, setFilter] = useLocalStorage<string | undefined>('filter', undefined);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const getFilter = useCallback(() => (filter ? `&query=${filter}` : ''), [filter]);

  const updateFilter = (query: string) => {
    if (query !== filter) {
      setHasMore(false);
      setNews([]);
      setPage(0);
      setFilter(query);
    }
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const getNews = useCallback(() => {
    fetch(`https://hn.algolia.com/api/v1/search_by_date?page=${page}${getFilter()}`)
      .then((res) => res.json())
      .then((res: Result) => {
        const parsed = res.hits.reduce<News[]>((acc, el) => {
          if (!el.author || !el.created_at || !el.story_title || !el.story_url) {
            return [...acc];
          }
          const item = {
            author: el.author,
            created_at: el.created_at,
            story_title: el.story_title,
            story_url: el.story_url,
            objectID: el.objectID
          };
          return [...acc, item];
        }, []);
        setHasMore(res.nbPages > page);
        setNews((prevNews) => {
          const filtered = parsed.filter(
            (el) => !prevNews.some((item) => item.objectID === el.objectID)
          );
          return [...prevNews, ...filtered];
        });
      })
      .catch((err) => console.log(err));
  }, [getFilter, page]);

  useEffect(() => {
    if (filter) {
      getNews();
    }
  }, [filter, getNews]);

  useEffect(() => {
    if (news.length > 0 && news.length < 11 && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [hasMore, news]);

  return { news, hasMore, loadMore, filter, updateFilter };
};

export default useNews;

type Result = {
  hits: News[];
  nbPages: number;
};
