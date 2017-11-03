import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreweryCard = ({ brewery, getBrewery, writeUserData, user }) => {
  return (
    <div className='beer-card'>
      <Link to={'/brewery/' + brewery.id}>
        <h2 onClick={() => getBrewery(brewery.id)}>{brewery.name}</h2>
      </Link>
      <h3>{brewery.location ? brewery.locations[0].locality + ", " + brewery.locations[0].region : ''}</h3>
      <h4 onClick={() => writeUserData(user.id, 'brewery', brewery.id)}>FAVORITE</h4>
    </div>
  );
};

BreweryCard.propTypes = {
  brewery: PropTypes.object,
  getBrewery: PropTypes.func,
  writeUserData: PropTypes.func,
  user: PropTypes.object
};

export default BreweryCard;
