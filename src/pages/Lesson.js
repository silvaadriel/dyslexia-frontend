import React, { useEffect } from 'react';
import useGlobal from '../store';
import SwipeableQuestions from '../components/SwipeableQuestions';
import Loading from '../components/Loading';

const Lesson = props => {
  const [globalState, globalActions] = useGlobal();

  const { params } = props.match;

  useEffect(() => {
    globalActions.lesson.fetchQuestions(params);
  }, [globalActions.lesson, params]);

  return (
    <>
      {globalState.isLoading ? (
        <Loading />
      ) : (
        <SwipeableQuestions questions={globalState.questions} />
      )}
    </>
  );
};

export default Lesson;
