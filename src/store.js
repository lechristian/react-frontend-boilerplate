import { createStore, combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from './reducers';


const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

const store = createStore(
  reducer,
);

const history = syncHistoryWithStore(browserHistory, store);

export {
  store,
  history,
};

