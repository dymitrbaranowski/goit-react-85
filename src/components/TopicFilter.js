import { useQueryParams } from 'hooks/UseQueryParams';

export const TopicFilter = () => {
  const { topic, changeTopic } = useQueryParams();

  return (
    <input
      type="text"
      value={topic}
      onChange={evt => changeTopic(evt.target.value)}
      placeholder="Topic filter"
    />
  );
};
