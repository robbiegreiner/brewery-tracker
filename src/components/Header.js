import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pint from '../assets/pint.svg';


const Header = ({ logout }) => {
  function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };



  return (
    <div className='header'>
      <Link to='/login'>
        <h3>Login</h3>
      </Link>
      <Link to='/createaccount'>
        <h3>Create Account</h3>
      </Link>
      <h3 className='logout' onClick={logout}>Logout</h3>
      <Link to='/'>
        <h1>Brew <img className='header-logo' src={pint}></img> Scout</h1>
      </Link>
      <Link to='/favorites'>
        <h3>Favorites</h3>
      </Link>
      <div className="dropdown">
        <button onClick={dropDown} className="dropbtn">Dropdown</button>
        <div id="myDropdown" className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  logout: PropTypes.func
};

export default Header;
