import fetch from '../services/lessonService';

export const fetchQuestions = (store, params) => {
  fetch(params).then(questions => store.setState({ questions }));
};
