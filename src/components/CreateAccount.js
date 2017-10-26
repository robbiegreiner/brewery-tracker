import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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


  // create action
  // pass user up as payload to reducer
  // set store


  // take id from dynamic route and then make api call for beers with that id
  // should search be broad or narrow



  render() {
    return (
      <div className='create-account'>
        <h1>Create Account Here</h1>
        <input placeholder="email" onChange={(event) => this.handleChange('email', event) }></input>
        <input placeholder="password" onChange={(event) => this.handleChange('password', event) }></input>
        <button onClick={ () => this.createNewUser()}>submit</button>
      </div>
    );

  }
}

CreateAccount.propTypes = {
  createAccount: PropTypes.func
};

export default CreateAccount;
