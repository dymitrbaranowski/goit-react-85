import { LevelFilter } from './LevelFilter';
import { TopicFilter } from './TopicFilter';
import { useQueryParams } from 'hooks/UseQueryParams';
import { useQueryParams } from 'hooks/UseQueryParams';

export const SearchBar = () => {
  const { resetFilters } = useQueryParams();

  return (
    <div>
      <TopicFilter />
      <LevelFilter />
      <button onClick={resetFilters}>Reset Filter</button>
    </div>
  );
};
