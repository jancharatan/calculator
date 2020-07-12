import React from 'react';
import { Home } from './pages/Home';
import { Calculator } from './pages/Calculator';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/calculator" component={Calculator} exact />
  </Switch>
);
    

export default App