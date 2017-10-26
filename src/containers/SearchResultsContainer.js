import { connect } from 'react-redux';
import SearchResults from '../components/SearchResults';


const mapStateToProps = store => ({
  searchResults: store.searchResults
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
