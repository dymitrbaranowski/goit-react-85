import axios from 'axios'

axios.defaults.baseURL = 'https://64f5a85d2b07270f705d815e.mockapi.io';

export const fetchQuizzes = async () => {
    const resp = await axios.get('/quizzes');
    return resp.data;
};