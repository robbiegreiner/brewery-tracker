import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BreweryCard = ({ brewery, getBrewery, addFavoriteBrewery, user, removeFavoriteBrewery, favorites }) => {
  return (
    <div className={ brewery.isFav ? 'favorite-card' : 'beer-card' }>
      <Link to={'/brewery/' + brewery.id}>
        <h2 onClick={() => getBrewery(brewery.id)}>{brewery.name}</h2>
      </Link>
      <h3>{brewery.location ? brewery.locations[0].locality + ", " + brewery.locations[0].region : ''}</h3>
      { brewery.isFav ? <h4 onClick={() => removeFavoriteBrewery(user.id, brewery.firebaseID)}>UNFAVORITE</h4> : <h4 onClick={() => addFavoriteBrewery(favorites, user.id, 'brewery', brewery.id, brewery)}>FAVORITE</h4> }
    </div>
  );
};

BreweryCard.propTypes = {
  brewery: PropTypes.object,
  getBrewery: PropTypes.func,
  writeUserData: PropTypes.func,
  user: PropTypes.object,
  removeFavorite: PropTypes.func,
  removeFavoriteBrewery: PropTypes.func
};

export default BreweryCard;
