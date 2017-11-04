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
      return Object.assign({}, { id: favorites[tag].id, firebaseID: tag });
    });
    return breweryIDs;
  }

  cleanBeerFavorites(favorites) {
    const keys = Object.keys(favorites);
    const beerTags = keys.filter( key => {
      return favorites[key].type === 'beer';
    });
    const beerIDs = beerTags.map( tag => {
      return Object.assign({}, { id: favorites[tag].id, firebaseID: tag });
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
    const { favoriteBeers, user, setCurrentBeer, removeFavoriteBeer } = this.props;
    return favoriteBeers.map( beer => {
      return <BeerCard
        deleteFavorite = {this.deleteFavorite}
        user={user}
        writeUserData={this.writeUserData}
        setCurrentBeer={setCurrentBeer}
        beer={beer}
        key={beer.id}
        removeFavoriteBeer={removeFavoriteBeer}/>;
    });
  }

  renderBreweries() {
    const { favoriteBreweries, user, getBrewery, removeFavoriteBrewery } = this.props;
    return favoriteBreweries.map( brewery => {
      return <BreweryCard
        user={user}
        writeUserData={this.writeUserData}
        getBrewery={getBrewery}
        brewery={brewery}
        key={brewery.id}
        removeFavoriteBrewery={removeFavoriteBrewery}/>;
    });
  }

  render() {
    if (this.props.favoriteBeers){
      return (
        <div className='favorites'>
          <h1>Favorites</h1>
          <div className='card-container'>
            {this.renderBreweries()}
            {this.renderBeers()}
          </div>
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
  favoriteBreweries: PropTypes.array,
  setCurrentBeer: PropTypes.func,
  getBrewery: PropTypes.func,
  removeFavorite: PropTypes.func,
  removeFavoriteBeer: PropTypes.func,
  removeFavoriteBrewery: PropTypes.func
};

export default Favorites;
