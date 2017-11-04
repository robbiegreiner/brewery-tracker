import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CityCard = ({ brewery, getBrewery, addFavoriteBrewery, removeFavoriteBrewery, user, favorites }) => {
  if (brewery.brewery){
    return (
      <div className={ brewery.isFav ? 'favorite-card' : 'beer-card' }>
        <Link to={'/brewery/' + brewery.id}>
          <h2 onClick={() => getBrewery(brewery.id)}>{brewery.name}</h2>
        </Link>
        <h3>{brewery.location ? brewery.locations[0].locality + ", " + brewery.locations[0].region : ''}</h3>
        { brewery.isFav ? <h4 onClick={() => removeFavoriteBrewery(user.id, brewery.firebaseID)}>UNFAVORITE</h4> : <h4 onClick={() => addFavoriteBrewery(favorites, user.id, 'brewery', brewery.id, brewery)}>FAVORITE</h4> }
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
