import { connect } from 'react-redux';
import Favorites from '../components/Favorites';
import { fetchFavoriteBeers, fetchFavoriteBreweries, setCurrentBeer, fetchBrewery, deleteFavoriteBeer, deleteFavoriteBrewery } from '../actions/actions.js';

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
  },
  getBrewery: (id) => {
    dispatch(fetchBrewery(id));
  },
  removeFavoriteBeer: (userId, firebaseID) => {
    dispatch(deleteFavoriteBeer(userId, firebaseID));
  },
  removeFavoriteBrewery: (userId, firebaseID) => {
    dispatch(deleteFavoriteBrewery(userId, firebaseID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
