import { connect } from 'react-redux';
import Landing from '../components/Landing';
import { fetchSearch } from '../actions/actions';


const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  searchAll: (searchValue) => {
    dispatch(fetchSearch(searchValue));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
