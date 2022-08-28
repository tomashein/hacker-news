import NewsCard from '@components/news-card';
import useFaves from '@hooks/useFaves';
import styles from './faves-tab.module.css';

const FavesTab = () => {
  const { faves } = useFaves();

  return (
    <div className={styles.grid}>
      {faves.map((fave, index) => (
        <NewsCard news={fave} key={fave.objectID} index={index} />
      ))}
    </div>
  );
};

export default FavesTab;
