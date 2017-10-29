import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RandomBrewery = ({ randomBrewery, getBrewery }) => {

  const showBrewery = id => {
    getBrewery(id);
  };


  if (randomBrewery.images) {
    return (
      <Link to='/brewery'>
        <div className='random-brewery' onClick={() => showBrewery(randomBrewery.id)}>
          <h3>Featured Brewery</h3>
          <h2>{randomBrewery.name}</h2>
          <img className='brewery-logo' src={randomBrewery.images.large}></img>
          <h3>{randomBrewery.locations[0].locality}, {randomBrewery.locations[0].region}</h3>
          <h4>{randomBrewery.website}</h4>
          <p>{randomBrewery.description ? randomBrewery.description : 'no description provided'}</p>
        </div>
      </Link>
    );
  } else {
    return (
      <h4>Featured Brewery</h4>
    );
  }
};

RandomBrewery.propTypes = {
  randomBrewery: PropTypes.object,
  getBrewery: PropTypes.func
};

export default RandomBrewery;
