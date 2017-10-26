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
        <h1>Landing Seach Here</h1>
        <button>Search</button>
      </div>
    );

  }
}

export default Landing;
