import { useSearchParams } from 'react-router-dom';

export const SearchBar = ({ level, topic, onChangeLevel, onChangeTopic }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <div>
      <input
        type="text"
        value={topic}
        onChange={evt => {
          onChangeTopic(evt.target.value);
        }}
        placeholder="Topic filter"
      />
      <select
        value={level}
        onChange={evt => {
          onChangeLevel(evt.target.value);
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
