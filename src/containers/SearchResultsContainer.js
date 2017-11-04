import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';
import { fetchBrewery, setCurrentBeer, deleteFavorite } from '../actions/actions';



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
  removeFavorite: (userId, firebaseID) => {
    dispatch(deleteFavorite(userId, firebaseID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
