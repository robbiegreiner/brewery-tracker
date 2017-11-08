import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import beer1 from '../assets/beer-tap.svg';

const showFavoriteButton = (brewery, user, favorites, addFavoriteBrewery) => {
  if (user.email) {
    return (
      <button className='favorite' onClick={() => addFavoriteBrewery(favorites, user.id, 'brewery', brewery.brewery.id, brewery)}>FAVORITE</button>
    );
  } else {
    return (
      <Link to='/login'><button className='favorite'>FAVORITE</button></Link>
    );
  }
};

const CityCard = ({ brewery, getBrewery, addFavoriteBrewery, user, favorites }) => {
  if (brewery){
    return (
      <div className={ brewery.brewery.isFav ? 'beer-card brewery-card favorite-card' : 'beer-card brewery-card' }>
        <Link to={`/brewery/${brewery.brewery.id}`}>
          <h2 onClick={() => getBrewery(brewery.brewery.id)}>{brewery.brewery.name}</h2>
        </Link>
        <h3>{brewery ? brewery.locality + ", " + brewery.region : ''}</h3>
        <Link to={`/brewery/${brewery.brewery.id}`}>
          {brewery.brewery.images ? <img onClick={() => getBrewery(brewery.brewery.id)} className='brewery-logo' src={brewery.brewery.images.squareMedium}></img>: <img onClick={() => getBrewery(brewery.brewery.id)} className='brewery-icon' src={beer1}></img>}
        </Link>
        <a className='website' href={brewery.website}>{brewery.website}</a>
        <h3 className='type'>{brewery ? brewery.locationTypeDisplay : ''}</h3>
        <div className='bottom-btns'>
          <Link to={`/brewery/${brewery.brewery.id}`}>
            <button className='view-beer' onClick={() => getBrewery(brewery.brewery.id)}>DETAILS</button>
          </Link>
          {showFavoriteButton(brewery, user, favorites, addFavoriteBrewery)}
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

CityCard.propTypes = {
  brewery: PropTypes.object,
  getBrewery: PropTypes.func,
  writeUserData: PropTypes.func,
  user: PropTypes.object,
  removeFavoriteBrewery: PropTypes.func,
  addFavoriteBrewery: PropTypes.func,
  favorites: PropTypes.object
};

export default CityCard;
