// import firebase from '../firebase.js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getFavorites(this.props.user.id);
  }

  render() {
    return (
      <div className='favorites'>
        <h1>Favorites Here!</h1>
      </div>
    );
  }

}

Favorites.propTypes = {
  user: PropTypes.object,
  getFavorites: PropTypes.func
};

export default Favorites;
