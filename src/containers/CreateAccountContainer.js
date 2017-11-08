import { connect } from 'react-redux';
import CreateAccount  from '../components/CreateAccount';
import { createAccount } from '../actions/actions.js';

const mapStateToProps = store => ({
  user: store.user,
  errorMessage: store.errorMessage
});

const mapDispatchToProps = dispatch => ({
  createAccount: (email, password) => {
    dispatch(createAccount(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
