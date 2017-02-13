import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import DevTools from './devtools';
import Layout from './Layout';
import generateStore from '../generateStore';

require('../../styles/index.scss');


const store = generateStore(DevTools);

const history = syncHistoryWithStore(browserHistory, store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router key={Math.random()} history={history}>
            <Route path="/" component={Layout} />
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
}

