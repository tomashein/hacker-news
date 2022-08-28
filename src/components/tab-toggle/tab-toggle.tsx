import { useCallback } from 'react';
import classNames from 'classnames';
import { Tab } from '@helpers/tabs';
import styles from './tab-toggle.module.css';

const TabToggle = ({ toggle, value }: TabToggleProps) => {
  const getClasses = useCallback(
    (tab: Tab) => classNames(styles.button, value === tab && styles.button_active),
    [value]
  );

  return (
    <div className={styles.container}>
      <button className={getClasses(Tab.all)} onClick={toggle(Tab.all)} type="button">
        All
      </button>
      <button className={getClasses(Tab.faves)} onClick={toggle(Tab.faves)} type="button">
        My faves
      </button>
    </div>
  );
};

export default TabToggle;

type TabToggleProps = {
  toggle: (value: Tab) => () => void;
  value: Tab;
};
