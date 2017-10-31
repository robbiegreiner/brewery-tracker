import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pint from '../assets/pint.svg';


const Header = () => {
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
      <Link to='/'>
        <h1>Brew <img className='header-logo' src={pint}></img> Scout</h1>
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

export default Header;
