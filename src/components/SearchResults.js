import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BeerCard from './BeerCard.js'
import BreweryCard from './BreweryCard.js'

const SearchResults = ({ searchResults }) => {

  const beerResults = searchResults.filter( result => {
    return result.style;
  });

  const breweryResults = searchResults.filter( result => {
    return result.type === "brewery";
  });

  const breweryCards = breweryResults.map( brewery => {
    return <BreweryCard
      brewery={brewery}
      key={brewery.id}/>;
  });

  const beerCards = beerResults.map( beer => {
    return <BeerCard
      beer={beer}
      key={beer.id}/>;
  });

  return (
    <div className='search-results'>
      <h1>Search Results</h1>
      <h2>Breweries</h2>
      <div className='card-container'>
        {breweryCards}
      </div>
      <h2>Beers</h2>
      <div className='card-container'>
        {beerCards}
      </div>
    </div>
  );
};


SearchResults.propTypes = {
  searchResults: PropTypes.array
};

export default SearchResults;
