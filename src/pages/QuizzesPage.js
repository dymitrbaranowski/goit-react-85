import { useEffect, useState } from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
import toast from 'react-hot-toast';
import { QuizList } from '../components/QuizList/QuizList';
import { SearchBar } from '../components/SearchBar';
import { deleteQuizById, fetchQuizzes } from '../components/api';
import { useSearchParams } from 'react-router-dom';

// const getIntialFilters = () => {
//   const savedFilters = localStorage.getItem('quiz-filters');
//   if (savedFilters !== null) {
//     return JSON.parse(savedFilters);
//   }
//   return {
//     topic: '',
//     level: 'all',
//   };
// };

export default function QuizzesPage() {
  const [quizItems, setQuizItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('b'));
  // const [filters, setFilters] = useState({
  //   topic: '',
  //   level: 'all',
  // });

  // HTTP запрос за всеми квизами
  useEffect(() => {
    async function getQuizzes() {
      try {
        setLoading(true);
        setError(false);
        const quizzes = await fetchQuizzes();
        setQuizItems(quizzes);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getQuizzes();
  }, []);

  // // Пишем фильтры в LS
  // useEffect(() => {
  //   localStorage.setItem('quiz-filters', JSON.stringify(filters));
  // }, [filters]);

  const deleteQuiz = async quizId => {
    try {
      setLoading(true);
      setError(false);
      const deletedQuiz = await deleteQuizById(quizId);
      setQuizItems(prevItems =>
        prevItems.filter(quiz => quiz.id !== deletedQuiz.id)
      );
      toast.success('ВСЕ ОЧЕНЬ ХОРОШО!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const changeFilters = (value, key) => {
    setSearchParams({ a: 20 });
    //  setFilters(prevFilters => ({
    //    ...prevFilters,
    //    [key]: value,
    //  }));
  };

  const resetFilters = () => {
    // setFilters({
    //   topic: '',
    //   level: 'all',
    // });
  };

  // const visibleItems = quizItems.filter(quiz => {
  //   const hasTopic = quiz.topic
  //     .toLowerCase()
  //     .includes(filters.topic.toLowerCase());

  //   if (filters.level === 'all') {
  //     return hasTopic;
  //   }
  //   return hasTopic && quiz.level === filters.level;
  // });

  return (
    <div>
      <SearchBar
        // level={filters.level}
        // topic={filters.topic}
        onChange={changeFilters}
        onReset={resetFilters}
      />
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
      {quizItems.length > 0 && (
        <QuizList items={quizItems} onDelete={deleteQuiz} />
      )}
    </div>
  );
}
