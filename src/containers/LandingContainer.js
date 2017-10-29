import { connect } from 'react-redux';
import Landing from '../components/Landing';
import { fetchSearch, fetchFeatures, fetchBrewery } from '../actions/actions';


const mapStateToProps = store => ({
  featureBrewery: store.featureBrewery,
  featureBeer: store.featureBeer
});

const mapDispatchToProps = dispatch => ({
  searchAll: (searchValue) => {
    dispatch(fetchSearch(searchValue));
  },
  getFeatures: () => {
    dispatch(fetchFeatures());
  },
  getBrewery: (id) => {
    dispatch(fetchBrewery(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
