import { useSearchParams } from 'react-router-dom';

export const SearchBar = ({ onChange, onReset }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get('topic') ?? '';
  const level = searchParams.get('level') ?? 'all';

  return (
    <div>
      <input
        type="text"
        value={topic}
        onChange={evt => {
          setSearchParams({
            topic: evt.target.value,
            level,
          });
        }}
        placeholder="Topic filter"
      />
      <select
        value={level}
        onChange={evt => {
          setSearchParams({
            topic,
            level: evt.target.value,
          });
        }}
      >
        <option value="all">All</option>
        <option value="beginer">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};
