export const SearchBar = ({ level, topic, onChangeLevel, onChangeTopic }) => {
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
        <option value="">Beginner</option>
        <option value="">Intermediate</option>
        <option value="">Advanced</option>
      </select>
    </div>
  );
};
