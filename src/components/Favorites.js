import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeerCard from './BeerCard.js';
import BreweryCard from './BreweryCard.js';
import firebase from '../firebase.js';


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

  writeUserData = (userId, type, id) => {
    firebase.database().ref(userId + '/favorites').push({
      type,
      id
    });
  };

  renderBeers() {
    const { favoriteBeers, user, setCurrentBeer } = this.props;
    return favoriteBeers.map( beer => {
      return <BeerCard
        user={user}
        writeUserData={this.writeUserData}
        setCurrentBeer={setCurrentBeer}
        beer={beer}
        key={beer.id}/>;
    });
  }

  render() {
    if (this.props.favoriteBeers){
      return (
        <div className='favorites'>
          {this.renderBeers()}
          <h1>Favorites Here!</h1>
        </div>
      );
    } else {
      return (
        <div className='favorites'>
          <h1>Favorites Not Here!</h1>
        </div>
      );
    }
  }
}

Favorites.propTypes = {
  user: PropTypes.object,
  favorites: PropTypes.object,
  getFavoriteBeers: PropTypes.func,
  getFavoriteBreweries: PropTypes.func,
  favoriteBeers: PropTypes.array,
  setCurrentBeer: PropTypes.func
};

export default Favorites;
