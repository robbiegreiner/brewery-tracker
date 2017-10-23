import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './index.js';
import createBrowserHistory from '../../node_modules/history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
// import DevTools from '../containers/DevTools.js';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  // rootReducer,
  // DevTools.instrument(),
  applyMiddleware(thunk),
  applyMiddleware(middleware)
);

export default store;
