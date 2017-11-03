// import firebase from '../firebase.js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Favorites extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getFavorites(this.props.user.id);
  }

  renderFavorites() {
    const { favorites } = this.props;
    console.log(favorites);
  }

  render() {
    if (this.props.favorites){
      return (
        <div className='favorites'>
          {this.renderFavorites()}
          <h1>Favorites Here!</h1>
        </div>
      );
    } else {
      return (
        <div className='favorites'>
          <h1>Favorites Here!</h1>
        </div>
      );
    }
  }
}

Favorites.propTypes = {
  user: PropTypes.object,
  getFavorites: PropTypes.func,
  favorites: PropTypes.object
};

export default Favorites;
