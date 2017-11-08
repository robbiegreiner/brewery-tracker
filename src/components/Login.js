import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
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

  userLogin() {
    const { login } = this.props;
    login(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className='login'>
        { this.props.user.id ? <Redirect to='/'/> : null}
        <h1>Login</h1>
        {this.props.errorMessage.length ? <h4 className='error-message'>Error: {this.props.errorMessage}</h4> : ''}
        <input placeholder="email" className="email-input" onChange={(event) => this.handleChange('email', event) }></input>
        <input placeholder="password" type="password" className="password-input" onChange={(event) => this.handleChange('password', event) }></input>
        <button className='login-btn' onClick={ () => this.userLogin()}>submit</button>
        <Link to='/createaccount'><h4>Not a member? Create an account!</h4></Link>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
  user: PropTypes.object,
  errorMessage: PropTypes.string
};

export default Login;
