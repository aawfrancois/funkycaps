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
import Upload from './components/Upload';

// create my component
const MyRoute = () => (
  <Router>
    <App name='layout'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/upload" component={Upload} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>
);

export default MyRoute;
