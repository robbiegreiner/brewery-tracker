import { connect } from 'react-redux';
import Favorites from '../components/Favorites';
// import { login } from '../actions/actions.js';

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
