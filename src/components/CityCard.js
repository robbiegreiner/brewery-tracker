import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CityCard = ({ brewery, getBrewery }) => {
  if (brewery){
    return (
      <Link to='/brewery'>
        <div className='beer-card' onClick={() => getBrewery(brewery.breweryId)}>
          <h2>{brewery.brewery.name}</h2>
          <h3>{brewery.locationTypeDisplay}</h3>
          {/* <img className='brewery-icon' src={brewery.images.large}></img> */}
          <h4>{brewery.streetAddress}</h4>
          <h4>{brewery.locality} , {brewery.region} {brewery.postalCode}</h4>
        </div>
      </Link>
    );
  } else {
    return (
      <h1>No Match</h1>
    );
  }
};

CityCard.propTypes = {
  brewery: PropTypes.object,
  getBrewery: PropTypes.func
};

export default CityCard;
