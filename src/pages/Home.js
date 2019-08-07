import React, { useEffect } from 'react';
import useGlobal from '../store';
import SwipeableModules from '../components/SwipeableModules';

const Home = () => {
  const [globalState, globalActions] = useGlobal();

  useEffect(() => {
    globalActions.module.fetchModules();
  }, [globalActions.module]);

  return <SwipeableModules modules={globalState.modules} />;
};

export default Home;
