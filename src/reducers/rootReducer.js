import { combineReducers } from 'redux';
import user from './user';
import searchResults from './searchResults';
import randomBrewery from './randomBrewery';
import brewery from './brewery';
import breweryBeers from './breweryBeers';

const rootReducer = combineReducers({
  user,
  searchResults,
  randomBrewery,
  brewery,
  breweryBeers
});

export default rootReducer;
