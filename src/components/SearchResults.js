import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BeerCard from './BeerCard.js';
import BreweryCard from './BreweryCard.js';
import CityCard from './CityCard.js';

const SearchResults = ({ searchResults, getBrewery, setCurrentBeer }) => {

  const beerResults = searchResults.filter( result => {
    return result.style;
  });

  const breweryResults = searchResults.filter( result => {
    return result.type === "brewery";
  });

  const cityResults = searchResults.filter( result => {
    return result.breweryId;
  });

  const breweryCards = breweryResults.map( brewery => {
    return <BreweryCard
      getBrewery={getBrewery}
      brewery={brewery}
      key={brewery.id}/>;
  });


  const beerCards = beerResults.map( beer => {
    return <BeerCard
      setCurrentBeer={setCurrentBeer}
      beer={beer}
      key={beer.id}/>;
  });

  const cityCards = cityResults.map( brewery => {
    return <CityCard
      getBrewery={getBrewery}
      brewery={brewery}
      key={brewery.id}/>;
  });

  return (
    <div className='search-results'>
      <h1>Search Results</h1>
      <h2>Breweries</h2>
      <div className='card-container'>
        {breweryCards}
        {cityCards}
      </div>
      <h2>Beers</h2>
      <div className='card-container'>
        {beerCards}
      </div>
    </div>
  );
};


SearchResults.propTypes = {
  searchResults: PropTypes.array,
  getBrewery: PropTypes.func,
  setCurrentBeer: PropTypes.func
};

export default SearchResults;
