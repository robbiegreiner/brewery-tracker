import { connect } from 'react-redux';
import Login from '../components/Login';
// import loginUser from '../actions';

const mapStateToProps = store => ({
  // user: store.user
});

const mapDispatchToProps = dispatch => {
  // login: user => {
  //   dispatch(loginUser(user));
  // }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
