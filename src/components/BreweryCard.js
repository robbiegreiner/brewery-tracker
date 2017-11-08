import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import beer1 from '../assets/beer-tap.svg';

const showFavoriteButton = (user, brewery, removeFavoriteBrewery, getBrewery, addFavoriteBrewery, favorites) => {
  if (user.email) {
    return (
      <div className='bottom-btns'>
        <Link to={`/brewery/${brewery.id}`}>
          <button className='view-beer' onClick={() => getBrewery(brewery.id)}>DETAILS</button>
        </Link>
        { removeFavoriteBrewery ? <button className='unfavorite favorite' onClick={() => removeFavoriteBrewery(user.id, brewery.firebaseID)}>UNFAVORITE</button> : <button className='favorite' onClick={() => addFavoriteBrewery(favorites, user.id, 'brewery', brewery.id, brewery)}>FAVORITE</button> }
      </div>
    );
  } else {
    return <div className='bottom-btns'>
      <Link to={`/brewery/${brewery.id}`}>
        <button className='view-beer' onClick={() => getBrewery(brewery.id)}>DETAILS</button>
      </Link>
      <Link to='/login'><button className='favorite'>FAVORITE</button></Link>
    </div>;
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
        {showFavoriteButton(user, brewery, removeFavoriteBrewery, getBrewery, addFavoriteBrewery, favorites)}
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
