import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';
import { fetchBrewery, setCurrentBeer } from '../actions/actions';



const mapStateToProps = store => ({
  searchResults: store.searchResults,
  searchType: store.searchType
});

const mapDispatchToProps = dispatch => ({
  getBrewery: (id) => {
    dispatch(fetchBrewery(id));
  },
  setCurrentBeer: (beer) => {
    dispatch(setCurrentBeer(beer));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
