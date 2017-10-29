import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pint from '../assets/pint.svg';


const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <h1>Brewery <img className='header-logo' src={pint}></img> Tracker</h1>
      </Link>
    </div>
  );
};

export default Header;
