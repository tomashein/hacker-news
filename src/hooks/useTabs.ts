import { useCallback } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { Tab } from '@helpers/tabs';

const useTabs = () => {
  const [tab, setTab] = useLocalStorage<Tab>('tab', Tab.all);

  const toggleTab = useCallback(
    (value: Tab) => () => {
      if (value !== tab) {
        setTab(value);
      }
    },
    [setTab, tab]
  );

  return { tab, toggleTab };
};

export default useTabs;
