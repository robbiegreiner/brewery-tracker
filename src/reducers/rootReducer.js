import { combineReducers } from 'redux';
import user from './user';
import searchResults from './searchResults';
import randomBrewery from './randomBrewery';

const rootReducer = combineReducers({
  user,
  searchResults,
  randomBrewery
});

export default rootReducer;
