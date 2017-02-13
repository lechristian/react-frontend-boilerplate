import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import Layout from './Layout';
import { store, history } from '../store';

require('../../styles/index.scss');


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router key={Math.random()} history={history}>
          <Route path="/" component={Layout} />
        </Router>
      </Provider>
    );
  }
}

