import AppHeader from '@components/app-header';
import FavesTab from '@components/faves-tab';
import NewsTab from '@components/news-tab';
import TabToggle from '@components/tab-toggle';
import FavesProvider from '@context/faves';
import { Tab } from '@helpers/tabs';
import useTabs from '@hooks/useTabs';
import styles from './app.module.css';

const App = () => {
  const { tab, toggleTab } = useTabs();

  return (
    <>
      <AppHeader />
      <nav className={styles.nav}>
        <TabToggle toggle={toggleTab} value={tab} />
      </nav>
      <main className={styles.main}>
        <FavesProvider>
          {tab === Tab.all && <NewsTab />}
          {tab === Tab.faves && <FavesTab />}
        </FavesProvider>
      </main>
    </>
  );
};

export default App;
