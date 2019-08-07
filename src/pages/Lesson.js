import React, { useEffect } from 'react';
import useGlobal from '../store';
import SwipeableQuestions from '../components/SwipeableQuestions';

const Lesson = props => {
  const [globalState, globalActions] = useGlobal();

  const { params } = props.match;

  useEffect(() => {
    globalActions.lesson.fetchQuestions(params);
  }, [globalActions.lesson, params]);

  return <SwipeableQuestions questions={globalState.questions} />;
};

export default Lesson;
