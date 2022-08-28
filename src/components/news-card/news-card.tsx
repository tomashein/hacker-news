/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import DateIcon from '@assets/icon-date.svg';
import FavesToggle from '@components/faves-toggle';
import { timeAgo } from '@helpers/news';
import { News } from '@types';
import styles from './news-card.module.css';

const NewsCard = ({ news, index }: NewsCardProps) => {
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <article
      className={styles.card}
      key={news.objectID}
      onClick={() => handleClick(news.story_url)}
      onKeyPress={() => {}}
      role="button"
      tabIndex={index}
    >
      <div className={styles.data}>
        <div className={styles.meta}>
          <DateIcon /> {timeAgo(news.created_at)} by {news.author}
        </div>
        <h2 className={styles.title}>{news.story_title}</h2>
      </div>
      <div className={styles.fave}>
        <FavesToggle news={news} />
      </div>
    </article>
  );
};

export default NewsCard;

type NewsCardProps = {
  news: News;
  index: number;
};
