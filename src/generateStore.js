import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reducers from './reducers';


const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

function generateStore(DevTools) {
  if (DevTools) {
    return createStore(
      reducer,
      DevTools.instrument(),
    );
  }
  return createStore(reducer);
}

export default generateStore;

