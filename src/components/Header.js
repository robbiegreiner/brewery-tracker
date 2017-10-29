import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <h1>Brewery Tracker</h1>
      </Link>
    </div>
  );
};

export default Header;
