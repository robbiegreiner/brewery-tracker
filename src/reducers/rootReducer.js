import { combineReducers } from 'redux';
import user from './user';
import searchResults from './searchResults';
import randomBrewery from './randomBrewery';
import brewery from './brewery';
import breweryBeers from './breweryBeers';
import randomBeer from './randomBeer';

const rootReducer = combineReducers({
  user,
  searchResults,
  randomBrewery,
  randomBeer,
  brewery,
  breweryBeers
});

export default rootReducer;
