import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';
import { fetchBrewery, setCurrentBeer, deleteFavoriteBeer, deleteFavoriteBrewery } from '../actions/actions';



const mapStateToProps = store => ({
  searchResults: store.searchResults,
  searchType: store.searchType,
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  getBrewery: (id) => {
    dispatch(fetchBrewery(id));
  },
  setCurrentBeer: (beer) => {
    dispatch(setCurrentBeer(beer));
  },
  removeFavoriteBeer: (userId, firebaseID) => {
    dispatch(deleteFavoriteBeer(userId, firebaseID));
  },
  removeFavoriteBrewery: (userId, firebaseID) => {
    dispatch(deleteFavoriteBrewery(userId, firebaseID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
