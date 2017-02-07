import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './Layout';
import Home from './Home';

require('../styles/index.scss');


export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <Route path="home" component={Home} />
        </Route>
      </Router>
    );
  }
}

