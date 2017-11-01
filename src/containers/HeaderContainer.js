import { connect } from 'react-redux';
import Header from '../components/Header';
import { logout } from '../actions/actions.js';

const mapStateToProps = store => ({
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
