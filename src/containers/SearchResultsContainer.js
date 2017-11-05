import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';
import { fetchBrewery, setCurrentBeer, addFavoriteBeer, addFavoriteBrewery } from '../actions/actions';



const mapStateToProps = store => ({
  searchResults: store.searchResults,
  searchType: store.searchType,
  user: store.user,
  favorites: store.favorites
});

const mapDispatchToProps = dispatch => ({
  getBrewery: (id) => {
    dispatch(fetchBrewery(id));
  },
  setCurrentBeer: (beer) => {
    dispatch(setCurrentBeer(beer));
  },
  addFavoriteBeer: (userId, type, id, beer) => {
    dispatch(addFavoriteBeer(userId, type, id, beer));
  },
  addFavoriteBrewery: (favorites, userId, type, id, brewery) => {
    dispatch(addFavoriteBrewery(favorites, userId, type, id, brewery));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
