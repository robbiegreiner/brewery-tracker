import { connect } from 'react-redux';
import Landing from '../components/Landing';
import { fetchSearch, fetchFeatures, fetchBrewery, fetchCity } from '../actions/actions';


const mapStateToProps = store => ({
  featureBrewery: store.featureBrewery,
  featureBeer: store.featureBeer
});

const mapDispatchToProps = dispatch => ({
  searchAll: (searchValue, searchType) => {
    dispatch(fetchSearch(searchValue, searchType));
  },
  searchCity: (city, state) => {
    dispatch(fetchCity(city, state));
  },
  getFeatures: () => {
    dispatch(fetchFeatures());
  },
  getBrewery: (id) => {
    dispatch(fetchBrewery(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
