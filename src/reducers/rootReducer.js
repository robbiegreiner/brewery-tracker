import { combineReducers } from 'redux';
import user from './user';
import searchResults from './searchResults';

const rootReducer = combineReducers({
  user,
  searchResults
});

export default rootReducer;
