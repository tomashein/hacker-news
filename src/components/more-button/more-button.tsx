import styles from './more-button.module.css';

const MoreButton = ({ load }: MoreButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={load} type="button">
        Load more
      </button>
    </div>
  );
};

export default MoreButton;

type MoreButtonProps = {
  load: () => void;
};
