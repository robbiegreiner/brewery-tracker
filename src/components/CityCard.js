import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CityCard = ({ brewery, getBrewery, addFavoriteBrewery, user }) => {
  if (brewery.brewery){
    return (
      <div className='beer-card'>
        <Link to={'/brewery/' + brewery.id}>
          <h2 onClick={() => getBrewery(brewery.id)}>{brewery.name}</h2>
        </Link>
        <h3>{brewery.location ? brewery.locations[0].locality + ", " + brewery.locations[0].region : ''}</h3>
        <h4 onClick={() => addFavoriteBrewery(user.id, 'brewery', brewery.id)}>FAVORITE</h4>
      </div>
    );
  } else {
    return (
      <h1>No Match</h1>
    );
  }
};

CityCard.propTypes = {
  brewery: PropTypes.object,
  getBrewery: PropTypes.func,
  writeUserData: PropTypes.func,
  user: PropTypes.object,
  removeFavoriteBrewery: PropTypes.func
};

export default CityCard;
