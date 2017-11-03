// import firebase from '../firebase.js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Favorites extends Component {
  constructor() {
    super();
  }

  //currently favorites are getting loaded after login
  //when this component loads
  //clean favorites data split up into beers and Breweries
  //fetch call thru array (promise all)
  //return to beer and brewery arrays

  cleanFavorites(favorites) {
    const keys = Object.keys(favorites);
    // if type brewery return to brewery array
    // if type beer return to beer array
  }

  renderFavorites() {
    const { favorites } = this.props;
    console.log(favorites);
  }

  // -KxoYn06nNczpUPCm4f5: {id: "VGRuro", type: "brewery"}
  // -Ky1RKwKgQuMK3qVhd40: {id: "ugYYEh", type: "beer"}

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
  favorites: PropTypes.object
};

export default Favorites;
