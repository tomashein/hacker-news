import Logo from '@assets/logo.png';
import styles from './app-header.module.css';

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <img alt="Hacker News" src={Logo} />
    </header>
  );
};

export default AppHeader;
