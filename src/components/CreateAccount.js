import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import firebase, { auth, provider } from '../firebase.js';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }


  handleChange(description, event){
    this.setState({
      [description]: event.target.value
    });
  }

  createNewUser() {
    const { createAccount } = this.props;
    createAccount(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className='login'>
        { this.props.user.id ? <Redirect to='/'/> : null}
        <h1>Create Account</h1>
        {this.props.errorMessage.length ? <h4 className='error-message'>Error: {this.props.errorMessage}</h4> : ''}
        <input placeholder="email" className="email-input" onChange={(event) => this.handleChange('email', event) }></input>
        <input type="password" placeholder="password" className='password-input' onChange={(event) => this.handleChange('password', event) }></input>
        <button className='login-btn' onClick={ () => this.createNewUser()}>submit</button>
        <Link to='/login'><h4>Already a member?  Sign in here!</h4></Link>
      </div>
    );

  }
}

CreateAccount.propTypes = {
  createAccount: PropTypes.func,
  user: PropTypes.object,
  errorMessage: PropTypes.string
};

export default CreateAccount;
