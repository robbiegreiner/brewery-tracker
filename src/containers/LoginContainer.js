import { connect } from 'react-redux';
import Login from '../components/Login';
import { login } from '../actions/actions.js';

const mapStateToProps = store => ({
  user: store.user,
  errorMessage: store.errorMessage
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => {
    dispatch(login(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
