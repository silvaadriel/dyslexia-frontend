import React from 'react';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import { Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/lesson/:moduleId/:lessonId" component={Lesson} />
    </Switch>
  );
}

export default Routes;