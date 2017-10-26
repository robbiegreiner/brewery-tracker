import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchResults = ({ searchResults }) => {

  const beerResults = searchResults.filter( result => {
    console.log(result);
    return result.type === "beer";
  });

  const beerNames = beerResults.map( beer => {
    return (
      <h2>{beer.name}</h2>
    )
  })

  console.log(beerResults);


  return (
    <div className='Search Results'>
      <h1>Search Results</h1>
      <h2>{beerNames}</h2>
    </div>
  );
};


SearchResults.propTypes = {
  searchResults: PropTypes.array
};

export default SearchResults;
