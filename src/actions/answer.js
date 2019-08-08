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
    store.setState({ score: store.state.score + 1 });
    console.log('correto', store.state.score);
    console.log(store.actions.score.getEarnedStars(), ' estrelas');
    store.actions.answer.setIsVerified(true);
  } else {
    store.actions.answer.setIsVerified(true);
    const questions = [...store.state.questions];
    questions.push(store.state.questions[questionIndex]);
    store.setState({ questions });
  }
};
