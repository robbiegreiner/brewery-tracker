// import firebase from '../firebase.js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Favorites extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { favorites, getFavoriteBeers, getFavoriteBreweries } = this.props;
    const brewIDs = this.cleanBreweryFavorites(favorites);
    const beerIDs = this.cleanBeerFavorites(favorites);
    getFavoriteBeers(beerIDs);
    getFavoriteBreweries(brewIDs);
  }

  cleanBreweryFavorites(favorites) {
    const keys = Object.keys(favorites);
    const breweryTags = keys.filter( key => {
      return favorites[key].type === 'brewery';
    });

    const breweryIDs = breweryTags.map( tag => {
      return favorites[tag].id;
    });
    return breweryIDs;
  }

  cleanBeerFavorites(favorites) {
    const keys = Object.keys(favorites);
    const beerTags = keys.filter( key => {
      return favorites[key].type === 'beer';
    });
    const beerIDs = beerTags.map( tag => {
      return favorites[tag].id;
    });
    return beerIDs;
  }

  renderFavorites() {

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
  favorites: PropTypes.object,
  getFavoriteBeers: PropTypes.func,
  getFavoriteBreweries: PropTypes.func
};

export default Favorites;
