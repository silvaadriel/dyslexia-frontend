import React from 'react';
import useGlobalHook from 'use-global-hook';

import * as actions from '../actions';

const initialState = {
  isAnswered: false,
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;