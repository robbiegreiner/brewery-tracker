import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BeerCard from './BeerCard.js';
import BreweryCard from './BreweryCard.js';
import CityCard from './CityCard.js';
import firebase from '../firebase.js';

const SearchResults = ({ searchResults, getBrewery, setCurrentBeer, searchType, user, removeFavoriteBeer, removeFavoriteBrewery, addFavoriteBrewery, addFavoriteBeer, favorites }) => {

  const beerResults = searchResults.filter( result => {
    return result.style;
  });

  const breweryResults = searchResults.filter( result => {
    return result.type === "brewery";
  });

  const cityResults = searchResults.filter( result => {
    return result.breweryId;
  });

  if (favorites){
    const favoriteIDs = Object.keys(favorites).map( favorite => {
      return favorites[favorite].id;
    });

    breweryResults.forEach( brewery => {
      if (favoriteIDs.includes(brewery.id)){
        brewery.isFav = true;
      }
    });

    beerResults.forEach( beer => {
      if (favoriteIDs.includes(beer.id)){
        beer.isFav = true;
      }
    });
  }



  const breweryCards = breweryResults.map( brewery => {
    return <BreweryCard
      user={user}
      addFavoriteBrewery={addFavoriteBrewery}
      removeFavoriteBrewery={removeFavoriteBrewery}
      favorites={favorites}
      getBrewery={getBrewery}
      brewery={brewery}
      key={brewery.id}/>;
  });


  const beerCards = beerResults.map( beer => {
    return <BeerCard
      user={user}
      favorites={favorites}
      addFavoriteBeer={addFavoriteBeer}
      removeFavoriteBeer={removeFavoriteBeer}
      setCurrentBeer={setCurrentBeer}
      beer={beer}
      key={beer.id}/>;
  });

  const cityCards = cityResults.map( brewery => {
    return <CityCard
      getBrewery={getBrewery}
      favorites={favorites}
      addFavoriteBrewery={addFavoriteBrewery}
      removeFavoriteBrewery={removeFavoriteBrewery}
      user={user}
      brewery={brewery}
      key={brewery.id}/>;
  });

  return (
    <div className='search-results'>
      <h1>Search Results</h1>
      <div className='card-container'>
        { searchType === 'beer' ? beerCards : null}
        { searchType === 'brewery' ? breweryCards : null}
        { searchType === 'city' ? cityCards : null}
      </div>
    </div>
  );
};


SearchResults.propTypes = {
  searchResults: PropTypes.array,
  getBrewery: PropTypes.func,
  setCurrentBeer: PropTypes.func,
  searchType: PropTypes.string,
  user: PropTypes.object,
  removeFavoriteBeer: PropTypes.func,
  removeFavoriteBrewery: PropTypes.func
};

export default SearchResults;
