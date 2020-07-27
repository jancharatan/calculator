import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import About from './pages/About';
import Convert from './pages/Convert';

const App = () => (
  <Switch>
    <Route path="/calculator" component={Home} exact />
    <Route path="/about" component={About} exact />
    <Route path="/calc" component={Calculator} exact />
    <Route path="/convert" component={Convert} exact />
  </Switch>
);

export default App;
