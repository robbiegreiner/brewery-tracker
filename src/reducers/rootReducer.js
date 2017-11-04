import { combineReducers } from 'redux';
import user from './user';
import searchResults from './searchResults';
import featureBrewery from './featureBrewery';
import brewery from './brewery';
import breweryBeers from './breweryBeers';
import featureBeer from './featureBeer';
import currentBeer from './currentBeer';
import searchType from './searchType';
import favorites from './favorites';
import favoriteBeers from './favoriteBeers';
import favoriteBreweries from './favoriteBreweries';

const rootReducer = combineReducers({
  user,
  searchResults,
  featureBrewery,
  featureBeer,
  brewery,
  breweryBeers,
  currentBeer,
  searchType,
  favorites,
  favoriteBeers,
  favoriteBreweries
});

export default rootReducer;
