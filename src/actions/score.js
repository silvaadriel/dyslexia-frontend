export const getEarnedStars = store => {
  const { questions, score } = store.state;
  const hitPercentage = (score * 100) / questions.length;

  console.log(hitPercentage);

  if (hitPercentage === 100) return 3;
  else if (hitPercentage > 60) return 2;
  else return 1;
};
