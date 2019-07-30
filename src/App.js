import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
