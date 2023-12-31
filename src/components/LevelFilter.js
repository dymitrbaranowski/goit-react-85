import { useQueryParams } from 'hooks/UseQueryParams';

export const LevelFilter = () => {
  const { level, changeLevel } = useQueryParams();

  return (
    <select value={level} onChange={evt => changeLevel(evt.target.value)}>
      <option value="all">All</option>
      <option value="beginer">Beginner</option>
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select>
  );
};
