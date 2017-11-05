import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import beer1 from '../assets/tap.svg';

const BreweryCard = ({ brewery, getBrewery, addFavoriteBrewery, user, removeFavoriteBrewery, favorites }) => {
  if(user.email) {
    return (
      <div className={ brewery.isFav ? 'beer-card brewery-card favorite-card' : 'beer-card brewery-card' }>
        <Link to={'/brewery/' + brewery.id}>
          <h2 onClick={() => getBrewery(brewery.id)}>{brewery.name}</h2>
        </Link>
        <h3>{brewery.locations ? brewery.locations[0].locality + ", " + brewery.locations[0].region : ''}</h3>
        {brewery.images ? <img className='brewery-logo' src={brewery.images.squareMedium}></img>: <img className='brewery-icon' src={beer1}></img>}
        <a className='website' href={brewery.website}>{brewery.website}</a>
        <h3 className='type'>{brewery.locations ? brewery.locations[0].locationTypeDisplay : ''}</h3>
        { removeFavoriteBrewery ? <h4 className='favorite' onClick={() => removeFavoriteBrewery(user.id, brewery.firebaseID)}>UNFAVORITE</h4> : <h4 className='favorite' onClick={() => addFavoriteBrewery(favorites, user.id, 'brewery', brewery.id, brewery)}>FAVORITE</h4> }
      </div>
    );
  } else {
    return (
      <div className={ brewery.isFav ? 'beer-card brewery-card favorite-card' : 'beer-card brewery-card' }>
        <Link to={'/brewery/' + brewery.id}>
          <h2 onClick={() => getBrewery(brewery.id)}>{brewery.name}</h2>
        </Link>
        <h3>{brewery.locations ? brewery.locations[0].locality + ", " + brewery.locations[0].region : ''}</h3>
        {brewery.images ? <img className='brewery-logo' src={brewery.images.squareMedium}></img>: <img className='brewery-icon' src={beer1}></img>}
        <a className='website' href={brewery.website}>{brewery.website}</a>
        <h3 className='type'>{brewery.locations ? brewery.locations[0].locationTypeDisplay : ''}</h3>
        <Link to='/login'><h4 className='favorite'>FAVORITE</h4></Link> 
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
  removeFavoriteBrewery: PropTypes.func
};

export default BreweryCard;
