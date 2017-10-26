import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import firebase, { auth, provider } from '../firebase.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  render() {
    return (
      <div className='login'>
        <h1>Login Here</h1>
        <button onClick={this.login.bind(this)}>Log In</button>
      </div>
    );

  }
}

export default Login;
