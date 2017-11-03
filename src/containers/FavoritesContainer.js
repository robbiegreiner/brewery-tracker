import { connect } from 'react-redux';
import Favorites from '../components/Favorites';
import { fetchFavorites } from '../actions/actions.js';

const mapStateToProps = store => ({
  user: store.user,
  favorites: store.favorites
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
