import { Topic, Wrapper, Metawrapper, Text } from './QuizCard.styled';
export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  return (
    <Wrapper level={level}>
      <Topic>{topic}</Topic>
      <Metawrapper>
        <Text color="red">
          <b>Level:</b> {level}
        </Text>
        <Text color="green">
          <b>Time:</b> {time}
        </Text>
        <Text>
          <b>Questions:</b> {questions}
        </Text>
      </Metawrapper>
      <button onClick={() => onDelete(id)}>Delete</button>
    </Wrapper>
  );
};
