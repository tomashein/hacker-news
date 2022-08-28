import MoreButton from '@components/more-button';
import NewsCard from '@components/news-card';
import NewsSelect from '@components/news-select';
import useNews from '@hooks/useNews';
import styles from './news-tab.module.css';

const NewsTab = () => {
  const { news, filter, hasMore, loadMore, updateFilter } = useNews();

  return (
    <>
      <div className={styles.filters}>
        <NewsSelect filter={filter} updateFilter={updateFilter} />
      </div>
      <div className={styles.grid}>
        {news.map((el, index) => (
          <NewsCard news={el} key={el.objectID} index={index} />
        ))}
      </div>
      {hasMore && <MoreButton load={loadMore} />}
    </>
  );
};

export default NewsTab;
