import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import App from './components/App';
import Caps from './components/Caps';
import Gallery from './components/Gallery';
import Profile from './components/Profile';

// create my component
const MyRoute = () => (
  <Router>
    <App name='layout'>
      <Switch>
        <Route exact path="/" component={Caps} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>
);

export default MyRoute;
