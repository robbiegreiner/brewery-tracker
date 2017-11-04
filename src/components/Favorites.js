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

    const breweryTags = keys.filter( key => {
      favorites[key].type === 'brewery';
    });
    const beerTags = keys.filter( key => {
      return favorites[key].type === 'beer';
    });

    const breweryIDs = breweryTags.map( tag => {
      console.log('brew firing');
      return favorites[tag].id;
    });

    const beerIDs = beerTags.map( tag => {
      console.log('beer firing');
      return favorites[tag].id;
    });



    console.log('beer ', beerIDs);
    console.log('brewery ', breweryIDs )
  }

  renderFavorites() {
    const { favorites } = this.props;
    this.cleanFavorites(favorites);
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
