import { useRef, useState } from 'react';
import classNames from 'classnames';
import { useOnClickOutside } from 'usehooks-ts';
import DownIcon from '@assets/icon-chevron-down.svg';
import UpIcon from '@assets/icon-chevron-up.svg';
import { currentFilter, newsFilters } from '@helpers/news';
import styles from './news-select.module.css';

const NewsSelect = ({ filter, updateFilter }: NewsSelectProps) => {
  const [active, setActive] = useState(false);
  const selectRef = useRef(null);

  const onSelect = (value: string) => () => {
    if (filter !== value) {
      updateFilter(value);
      setActive(false);
    }
  };

  const toggleClass = classNames(styles.toggle, active && styles.toggle_active);
  const listClass = classNames(styles.list, active && styles.list_active);

  const buttonClass = (value: string) =>
    classNames(styles.list_button, filter === value && styles.list_button_active);

  const handleClickOutside = () => {
    if (active) setActive(false);
  };

  useOnClickOutside(selectRef, handleClickOutside);

  return (
    <div className={styles.select} ref={selectRef}>
      <button className={toggleClass} onClick={() => setActive(!active)} type="button">
        {filter ? currentFilter(filter) : 'Select your news'}
        <span className={styles.chevron}>{active ? <UpIcon /> : <DownIcon />}</span>
      </button>
      <div className={listClass}>
        {newsFilters.map((item) => (
          <button
            className={buttonClass(item.value)}
            key={item.value}
            onClick={onSelect(item.value)}
            type="button"
          >
            <img alt={item.label} src={item.image} />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsSelect;

type NewsSelectProps = {
  filter: string | undefined;
  updateFilter: (filter: string) => void;
};
