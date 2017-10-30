import { combineReducers } from 'redux';
import user from './user';
import searchResults from './searchResults';
import featureBrewery from './featureBrewery';
import brewery from './brewery';
import breweryBeers from './breweryBeers';
import featureBeer from './featureBeer';
import currentBeer from './currentBeer';

const rootReducer = combineReducers({
  user,
  searchResults,
  featureBrewery,
  featureBeer,
  brewery,
  breweryBeers,
  currentBeer
});

export default rootReducer;
