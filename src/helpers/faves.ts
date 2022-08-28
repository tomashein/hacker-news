import { News } from '@types';

const buildFaves = () => {
  const storage = { ...localStorage };
  const news = Object.keys(storage).reduce<News[]>((acc, el) => {
    if (el.includes('news_')) {
      const str = storage[el] as string;
      const json = JSON.parse(str) as News;
      return [...acc, { ...json }];
    }
    return acc;
  }, []);

  return news;
};

export { buildFaves };
