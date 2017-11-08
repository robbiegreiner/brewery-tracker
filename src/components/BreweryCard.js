import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import beer1 from '../assets/beer-tap.svg';

const showFavoriteButton = (user, brewery, removeFavoriteBrewery, addFavoriteBrewery, favorites) => {
  if (user.email && removeFavoriteBrewery) {
    return (
      <button className='unfavorite favorite' onClick={() => removeFavoriteBrewery(user.id, brewery.firebaseID)}>UNFAVORITE</button>
    );
  } else if (user.email && !removeFavoriteBrewery) {
    return (
      <button className='favorite favorite-2' onClick={() => addFavoriteBrewery(favorites, user.id, 'brewery', brewery.id, brewery)}>FAVORITE</button>
    );
  } else {
    return (
      <Link to='/login'><button className='favorite favorite-2'>FAVORITE</button></Link>
    );
  }
};

const BreweryCard = ({ brewery, getBrewery, addFavoriteBrewery, user, removeFavoriteBrewery, favorites }) => {
  if (brewery) {
    return (
      <div className={ brewery.isFav ? 'beer-card brewery-card favorite-card' : 'beer-card brewery-card' }>
        <Link to={`/brewery/${brewery.id}`}>
          <h2 onClick={() => getBrewery(brewery.id)}>{brewery.name}</h2>
        </Link>
        <h3>{brewery.locations ? brewery.locations[0].locality + ", " + brewery.locations[0].region : ''}</h3>
        <Link to={`/brewery/${brewery.id}`}>
          {brewery.images ? <img onClick={() => getBrewery(brewery.id)} className='brewery-logo' src={brewery.images.squareMedium}></img>: <img onClick={() => getBrewery(brewery.id)} className='brewery-icon' src={beer1}></img>}
        </Link>
        <a className='website' href={brewery.website}>{brewery.website}</a>
        <h3 className='type'>{brewery.locations ? brewery.locations[0].locationTypeDisplay : ''}</h3>
        <div className='bottom-btns'>
          <Link to={`/brewery/${brewery.id}`}>
            <button className='view-beer' onClick={() => getBrewery(brewery.id)}>DETAILS</button>
          </Link>
          {showFavoriteButton(user, brewery, removeFavoriteBrewery, addFavoriteBrewery, favorites)}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        No Results
      </div>
    );
  }
};

BreweryCard.propTypes = {
  brewery: PropTypes.object,
  getBrewery: PropTypes.func,
  writeUserData: PropTypes.func,
  user: PropTypes.object,
  removeFavorite: PropTypes.func,
  removeFavoriteBrewery: PropTypes.func,
  favorites: PropTypes.object,
  addFavoriteBrewery: PropTypes.func
};

export default BreweryCard;
