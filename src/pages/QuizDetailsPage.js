import { fetchQuizById } from '../components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function QuizDetailsPage() {
  const params = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const fetchQuiz = await fetchQuizById(params.quizId);
        setQuiz(fetchQuiz);
      } catch (error) {
        console.log(error);
      }
    }

    fetchQuiz();
  }, [params.quizId]);

    return <div>{quiz && <div>{quiz.topic}</div> }</div>;
}
