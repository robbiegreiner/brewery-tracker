import { connect } from 'react-redux';
import Landing from '../components/Landing';
import { fetchSearch, fetchRandomBrewery, fetchBrewery } from '../actions/actions';


const mapStateToProps = store => ({
  randomBrewery: store.randomBrewery
});

const mapDispatchToProps = dispatch => ({
  searchAll: (searchValue) => {
    dispatch(fetchSearch(searchValue));
  },
  getRandomBrewery: () => {
    dispatch(fetchRandomBrewery());
  },
  getBrewery: (id) => {
    dispatch(fetchBrewery(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
