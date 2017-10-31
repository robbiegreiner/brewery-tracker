import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreweryCard = ({ brewery, getBrewery, writeUserData, user }) => {
  return (
    <Link to={'/brewery/' + brewery.id}>
      <div className='beer-card'>
        <h2 onClick={() => getBrewery(brewery.id)}>{brewery.name}</h2>
        <h3>{brewery.locations[0].locality}, {brewery.locations[0].region}</h3>
        <h4 onClick={() => writeUserData(user.id)}>FAVORITE</h4>
      </div>
    </Link>
  );
};

BreweryCard.propTypes = {
  brewery: PropTypes.object,
  getBrewery: PropTypes.func
};

export default BreweryCard;
