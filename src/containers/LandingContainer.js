import { connect } from 'react-redux';
import Landing from '../components/Landing';
import { fetchSearch, fetchFeatures, fetchBrewery, fetchCity, fetchFavorites, setCurrentBeer } from '../actions/actions';


const mapStateToProps = store => ({
  featureBrewery: store.featureBrewery,
  featureBeer: store.featureBeer,
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  searchAll: (searchValue, searchType) => {
    dispatch(fetchSearch(searchValue, searchType));
  },
  searchCity: (city, state, searchType) => {
    dispatch(fetchCity(city, state, searchType));
  },
  getFeatures: () => {
    dispatch(fetchFeatures());
  },
  getBrewery: (id) => {
    dispatch(fetchBrewery(id));
  },
  setCurrentBeer: (beer) => {
    dispatch(setCurrentBeer(beer));
  },
  getFavorites: (userID) => {
    dispatch(fetchFavorites(userID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
