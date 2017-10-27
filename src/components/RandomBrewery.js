import React from 'react';
import PropTypes from 'prop-types';

const RandomBrewery = ({ randomBrewery }) => {
  if (randomBrewery.images) {
    return (
      <div className='random-brewery'>
        <h3>Featured Brewery</h3>
        {/* click takes you to brewery page */}
        <h2>{randomBrewery.name}</h2>
        <img className='brewery-logo' src={randomBrewery.images.large}></img>
        <h4>{randomBrewery.website}</h4>
        <p>{randomBrewery.description ? randomBrewery.description : 'no description provided'}</p>
      </div>
    );
  } else {
    return (
      <h4>Featured Brewery</h4>
    );
  }
};

RandomBrewery.propTypes = {
  randomBrewery: PropTypes.object
};

export default RandomBrewery;
