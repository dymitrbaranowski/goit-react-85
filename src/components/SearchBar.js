import { useSearchParams } from 'react-router-dom';
import { TopicFilter } from './TopicFilter';
import { LevelFilter } from './LevelFilter';

export const SearchBar = () => {
  const [setSearchParams] = useSearchParams();

  const resetFilters = () => {
    setSearchParams({
      topic: '',
      level: 'all',
    });
  };

  return (
    <div>
      <TopicFilter />
      <LevelFilter />
      <button onClick={resetFilters}>Reset Filter</button>
    </div>
  );
};
