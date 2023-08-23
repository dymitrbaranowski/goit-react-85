import { QuizForm } from './QuizForm';
import { QuizList } from './QuizList/QuizList';
import { SearchBar } from './SearchBar';
import initialQuizItems from '../quiz-items.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Component } from 'react';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    topicFilter: '',
    levelFilter: 'beginner',
  };

  deleteQuiz = quizId => {
    console.log(quizId);
  };
  render() {
    return (
      <Layout>
        <QuizForm />
        <SearchBar />
        <QuizList items={this.state.quizItems} onDelete={this.deleteQuiz} />
        <GlobalStyle />
      </Layout>
    );
  }
}
