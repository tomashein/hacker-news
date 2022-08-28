import AngularIcon from '@assets/icon-angular.png';
import ReactIcon from '@assets/icon-react.png';
import VueIcon from '@assets/icon-vue.png';

const timeAgo = (input: Date | string) => {
  const date = input instanceof Date ? input : new Date(input);
  const formatter = new Intl.RelativeTimeFormat('en');
  const ranges: { [index: string]: number } = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1
  };
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  const range = Object.keys(ranges).find((key) => ranges[key] < Math.abs(secondsElapsed));
  if (range) {
    const delta = secondsElapsed / ranges[range];
    return formatter.format(Math.round(delta), range as Intl.RelativeTimeFormatUnit);
  }
  return date.toLocaleDateString('en-US');
};

const newsFilters: Filter[] = [
  {
    label: 'Angular',
    value: 'angular',
    image: AngularIcon
  },
  {
    label: 'React',
    value: 'reactjs',
    image: ReactIcon
  },
  {
    label: 'Vue',
    value: 'vuejs',
    image: VueIcon
  }
];

const currentFilter = (value: string) => {
  const filter = newsFilters.find((el) => el.value === value);
  if (!filter) return value;
  return (
    <>
      <img alt={filter.label} src={filter.image} />
      {filter.label}
    </>
  );
};

type Filter = {
  label: string;
  value: string;
  image: string;
};

export { timeAgo, newsFilters, currentFilter };
