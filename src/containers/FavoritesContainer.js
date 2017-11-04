import { connect } from 'react-redux';
import Favorites from '../components/Favorites';
import { fetchFavorites, fetchFavoriteBeers, fetchFavoriteBreweries, setCurrentBeer } from '../actions/actions.js';

const mapStateToProps = store => ({
  user: store.user,
  favorites: store.favorites,
  favoriteBeers: store.favoriteBeers,
  favoriteBreweries: store.favoriteBreweries
});

const mapDispatchToProps = dispatch => ({
  getFavoriteBeers: (beerIDs) => {
    dispatch(fetchFavoriteBeers(beerIDs));
  },
  getFavoriteBreweries: (beerIDs) => {
    dispatch(fetchFavoriteBreweries(beerIDs));
  },
  setCurrentBeer: (beer) => {
    dispatch(setCurrentBeer(beer));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
