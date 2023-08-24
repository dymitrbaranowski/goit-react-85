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
    this.setState(prevState => ({
      quizItems: prevState.quizItems.filter(quiz => quiz.id !== quizId),
    }));
  };

  changeLevelFilter = newLevel => {
    this.setState({
      levelFilter: newLevel,
    });
  };

  changeTopicFilter = newTopic => {
    this.setState({
      topicFilter: newTopic,
    });
  };

  render() {
    return (
      <Layout>
        <QuizForm />
        <SearchBar
          level={this.state.levelFilter}
          topic={this.state.topicFilter}
          onChangeLevel={this.changeLevelFilter}
          onChangeTopic={this.changeTopicFilter}
        />
        <QuizList items={this.state.quizItems} onDelete={this.deleteQuiz} />
        <GlobalStyle />
      </Layout>
    );
  }
}
