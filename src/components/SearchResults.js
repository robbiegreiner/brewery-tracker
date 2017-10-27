import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BeerCard from './BeerCard.js'

const SearchResults = ({ searchResults }) => {

  const beerResults = searchResults.filter( result => {
    return result.style;
  });

  const breweryResults = searchResults.filter( result => {
    return result.type === "brewery";
  });

  const beerCards = beerResults.map( beer => {
    return <BeerCard
      beer={beer}
      key={beer.id}/>;
  });

  return (
    <div className='search-results'>
      <h1>Search Results</h1>
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
