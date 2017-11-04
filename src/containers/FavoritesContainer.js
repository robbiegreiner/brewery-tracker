import { connect } from 'react-redux';
import Favorites from '../components/Favorites';
import { fetchFavorites, fetchFavoriteBeers } from '../actions/actions.js';

const mapStateToProps = store => ({
  user: store.user,
  favorites: store.favorites
});

const mapDispatchToProps = dispatch => ({
  getFavoriteBeers: (beerIDs) => {
    dispatch(fetchFavoriteBeers(beerIDs));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
