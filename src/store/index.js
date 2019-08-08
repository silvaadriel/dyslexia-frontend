import React from 'react';
import useGlobalHook from 'use-global-hook';

import * as actions from '../actions';

const initialState = {
  isAnswered: false,
  isVerified: false,
  currentAnswer: '',
  modules: [],
  questions: [],
  score: 0,
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
