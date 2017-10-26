import { connect } from 'react-redux';
import CreateAccount  from '../components/CreateAccount';
import { createAccount } from '../actions/actions.js';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  createAccount: (email, password) => {
    dispatch(createAccount(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
