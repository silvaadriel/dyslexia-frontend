import fetch from '../services/lessonService';

export const fetchQuestions = (store, params) => {
  store.setState({ isLoading: true });
  fetch(params).then(questions => {
    store.setState({ questions });
    store.setState({ isLoading: false });
  });
};
