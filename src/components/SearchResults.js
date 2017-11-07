import React from 'react';
import PropTypes from 'prop-types';
import BeerCard from './BeerCard.js';
import BreweryCard from './BreweryCard.js';
import { Link } from 'react-router-dom';
import CityCard from './CityCard.js';

const SearchResults = ({ searchResults, getBrewery, setCurrentBeer, searchType, user, addFavoriteBrewery, addFavoriteBeer, favorites, errorMessage }) => {

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
      setCurrentBeer={setCurrentBeer}
      beer={beer}
      key={beer.id}/>;
  });

  const cityCards = cityResults.map( brewery => {
    return <CityCard
      getBrewery={getBrewery}
      favorites={favorites}
      addFavoriteBrewery={addFavoriteBrewery}
      user={user}
      brewery={brewery}
      key={brewery.id}/>;
  });

  const showError = () => {
    if (errorMessage || !searchResults.length) {
      return (
        <div>
          <h2>No results found, please enter a valid brewery, beer or city.</h2>
          <Link to='/'><h2 className='search-again'>Click Here To Search Again!</h2></Link>
        </div>
      );
    }
  };

  return (
    <div className='search-results'>
      <h1>Search Results</h1>
      <div className='card-container'>
        { showError() }
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
  addFavoriteBeer: PropTypes.func,
  addFavoriteBrewery: PropTypes.func,
  favorites: PropTypes.object,
  errorMessage: PropTypes.string
};

export default SearchResults;
