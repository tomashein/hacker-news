import AppHeader from '@components/app-header';
import FavesTab from '@components/faves-tab';
import NewsTab from '@components/news-tab';
import TabToggle from '@components/tab-toggle';
import useTabs from '@hooks/useTabs';
import { Tab } from '@helpers/tabs';
import FavesProvider from './faves';
import styles from './app.module.css';

const App = () => {
  const { tab, toggleTab } = useTabs();

  return (
    <>
      <AppHeader />
      <TabToggle toggle={toggleTab} value={tab} />
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
