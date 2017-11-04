import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pint from '../assets/pint.svg';


const Header = ({ logout, user }) => {
  return (
    <div className='header'>
      <Link to='/'>
        <h1>Brew <img className='header-logo' src={pint}></img> Scout</h1>
      </Link>
      <div>
        {!user.email ?
          <div className='header-buttons'>
            <Link to='/login'>
              <h3 className='fav-button'>Favorites</h3>
            </Link>
            <Link to='/login'>
              <h3>Login</h3>
            </Link>
            <Link to='/createaccount'>
              <h3>Create Account</h3>
            </Link></div>
          :
          <div className='logged-in-buttons'>
            <h5>Welcome, {user.email}</h5>
            <Link to='/'>
              <h3 className='logout' onClick={logout}>Logout</h3>
            </Link>
            <Link to='/favorites'>
              <h3 className='fav-button'>Favorites</h3>
            </Link>
          </div> }
      </div>
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.user
};

export default Header;
