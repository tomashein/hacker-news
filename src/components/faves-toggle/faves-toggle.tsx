import { useState } from 'react';
import FaveIconOutlined from '@assets/icon-fave-outlined.svg';
import FaveIconFilled from '@assets/icon-fave-filled.svg';
import useFaves from '@hooks/useFaves';
import { News } from '@types';
import styles from './faves-toggle.module.css';

const FavesToggle = ({ news }: FavesToggleProps) => {
  const [hover, setHover] = useState(false);
  const { faves, toggleFave } = useFaves();

  return (
    <button
      className={styles.button}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={toggleFave(news)}
      type="button"
    >
      {!!faves.find((fave) => fave.objectID === news.objectID) || hover ? (
        <FaveIconFilled />
      ) : (
        <FaveIconOutlined />
      )}
    </button>
  );
};

export default FavesToggle;

type FavesToggleProps = {
  news: News;
};
