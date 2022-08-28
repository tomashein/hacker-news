import AngularIcon from '@assets/icon-angular.png';
import ReactIcon from '@assets/icon-react.png';
import VueIcon from '@assets/icon-vue.png';

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

export { newsFilters, currentFilter };
