export const setIsAnswered = (store, isAnswered) => {
  store.setState({ isAnswered });
};

export const setIsVerified = (store, isVerified) => {
  store.setState({ isVerified });
};

export const verifyAnswer = (store, question) => {
  if (question.rightAnswer === store.state.currentAnswer) {
    console.log('correto');
    store.actions.answer.setIsVerified(true);
  }
  store.actions.answer.setIsVerified(true);
};
