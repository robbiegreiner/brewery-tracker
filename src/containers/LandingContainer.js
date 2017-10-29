import { connect } from 'react-redux';
import Landing from '../components/Landing';
import { fetchSearch, fetchRandoms, fetchBrewery } from '../actions/actions';


const mapStateToProps = store => ({
  randomBrewery: store.randomBrewery
});

const mapDispatchToProps = dispatch => ({
  searchAll: (searchValue) => {
    dispatch(fetchSearch(searchValue));
  },
  getRandoms: () => {
    dispatch(fetchRandoms());
  },
  getBrewery: (id) => {
    dispatch(fetchBrewery(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
