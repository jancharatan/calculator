import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import About from './pages/About';
import Convert from './pages/Convert';

const App = () => (
  <Switch>
    <Route path="/calculator" component={Home} exact />
    <Route path="/calculator/about" component={About} exact />
    <Route path="/calculator/calc" component={Calculator} exact />
    <Route path="/calculator/convert" component={Convert} exact />
  </Switch>
);

export default App;
