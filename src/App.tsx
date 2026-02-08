import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' exact component={Services} />
        <Route path='/services/:id' component={ServiceDetail} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;