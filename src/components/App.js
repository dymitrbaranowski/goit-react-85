import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import QuizzesPage from 'pages/QuizzesPage';
import CreateQuizPage from 'pages/CreateQuizPage';
import QuizDetailsPage from 'pages/QuizDetailsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="create" element={<CreateQuizPage />} />
          <Route path="quizes" element={<QuizzesPage />} />
          <Route path="quizes/:quizId" element={<QuizDetailsPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" />
    </>
  );
};


