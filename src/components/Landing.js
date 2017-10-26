import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    };
  }

  render() {
    return (
      <div className='landing'>
        <h1>Landing & Search Here</h1>
        <input placeholder="Search"></input>
        <button>City</button>
        <button>Brewery</button>
        <button>Beer</button>
        <button>Style</button>
      </div>
    );

  }
}

export default Landing;
