import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';
import { fetchBrewery } from '../actions/actions';


const mapStateToProps = store => ({
  searchResults: store.searchResults
});

const mapDispatchToProps = dispatch => ({
  getBrewery: (id) => {
    dispatch(fetchBrewery(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
