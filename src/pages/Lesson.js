import React, { useState, useEffect } from 'react';
import fetchQuestions from '../services/lessonService'
import SwipeableQuestions from '../components/SwipeableQuestions'

const Lesson = () =>{
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions(questions).then(questions => setQuestions(questions));
  }, [questions]);

  return <SwipeableQuestions questions={questions} />;
};

export default Lesson;