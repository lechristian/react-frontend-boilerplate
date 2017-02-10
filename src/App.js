import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './Layout';

require('../styles/index.scss');


export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout} />
      </Router>
    );
  }
}

