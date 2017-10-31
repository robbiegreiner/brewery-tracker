import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BeerCard from './BeerCard.js';
import BreweryCard from './BreweryCard.js';
import CityCard from './CityCard.js';
import firebase from '../firebase.js';

const SearchResults = ({ searchResults, getBrewery, setCurrentBeer, searchType, user }) => {

  const writeUserData = (userId, type, id) => {
    console.log('ytho');
    firebase.database().ref(userId + '/favorites').push({
      type: [type],
      id: [id]
    })
    // firebase.database().ref(userId).push().set({
    //   type: [type],
    //   id: [id]
    // });
    // firebase.database().ref(userId).set({favorites: [4,5,6]})
    // firebase.database().ref(userId).favorites.set([1, 2, 3])
  };

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
      user={user}
      writeUserData={writeUserData}
      getBrewery={getBrewery}
      brewery={brewery}
      key={brewery.id}/>;
  });


  const beerCards = beerResults.map( beer => {
    return <BeerCard
      user={user}
      writeUserData={writeUserData}
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
  searchType: PropTypes.string
};

export default SearchResults;
