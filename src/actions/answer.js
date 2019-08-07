export const setIsAnswered = (store, isAnswered) => {
  store.setState({ isAnswered });
};

export const setIsVerified = (store, isVerified) => {
  store.setState({ isVerified });
};

export const setCurrentAnswer = (store, currentAnswer) => {
  store.setState({ currentAnswer });
};

export const verifyAnswer = (store, questionIndex) => {
  if (
    store.state.questions[questionIndex].rightAnswer ===
    store.state.currentAnswer
  ) {
    console.log('correto');
    store.actions.answer.setIsVerified(true);
  }
  store.actions.answer.setIsVerified(true);
};
