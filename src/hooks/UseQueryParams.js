import { useSearchParams } from 'react-router-dom';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get('topic') ?? '';
  const level = searchParams.get('level') ?? 'all';

  const changeTopic = newTopic => {
    searchParams.set('topic', newTopic.target.value);
    setSearchParams(searchParams);
  };

  const changeLevel = newLevel => {
    searchParams.set('level', newLevel.target.value);
    setSearchParams(searchParams);
  };

  return {
    topic,
    level,
    changeTopic,
    changeLevel,
  };
};
