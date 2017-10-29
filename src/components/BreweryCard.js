import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreweryCard = ({ brewery, getBrewery }) => {
  return (
    <Link to='/brewery'>
      <div className='beer-card' onClick={() => getBrewery(brewery.id)}>
        <h2>{brewery.name}</h2>
        <h3>{brewery.locations[0].locality}, {brewery.locations[0].region}</h3>
      </div>
    </Link>
  );
};

BreweryCard.propTypes = {
  brewery: PropTypes.object,
  getBrewery: PropTypes.func
};

export default BreweryCard;
