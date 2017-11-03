import { connect } from 'react-redux';
import Favorites from '../components/Favorites';
import { fetchFavorites } from '../actions/actions.js';

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  getFavorites: (userID) => {
    dispatch(fetchFavorites(userID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
