import React, { useState, useEffect } from 'react';
import SwipeableModules from '../components/SwipeableModules';
import fetchModules from '../services/modulesService';

const Home = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetchModules().then(modules => setModules(modules));
  }, []);

  return <SwipeableModules modules={modules} />;
};

export default Home;
