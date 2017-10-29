import { combineReducers } from 'redux';
import user from './user';
import searchResults from './searchResults';
import randomBrewery from './randomBrewery';
import brewery from './brewery';

const rootReducer = combineReducers({
  user,
  searchResults,
  randomBrewery,
  brewery
});

export default rootReducer;
