import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import beer1 from '../assets/beer-tap.svg';

const CityCard = ({ brewery, getBrewery, addFavoriteBrewery, removeFavoriteBrewery, user, favorites }) => {
  if (user.email){
    return (
      <div className={ brewery.brewery.isFav ? 'beer-card brewery-card favorite-card' : 'beer-card brewery-card' }>
        <Link to={'/brewery/' + brewery.brewery.id}>
          <h2 onClick={() => getBrewery(brewery.brewery.id)}>{brewery.brewery.name}</h2>
        </Link>
        <h3>{brewery ? brewery.locality + ", " + brewery.region : ''}</h3>
        <Link to={'/brewery/' + brewery.brewery.id}>
          {brewery.brewery.images ? <img onClick={() => getBrewery(brewery.brewery.id)} className='brewery-logo' src={brewery.brewery.images.squareMedium}></img>: <img onClick={() => getBrewery(brewery.brewery.id)} className='brewery-icon' src={beer1}></img>}
        </Link>
        <h3 className='type'>{brewery ? brewery.locationTypeDisplay : ''}</h3>
        <Link to={'/brewery/' + brewery.brewery.id}>
          <h4 onClick={() => getBrewery(brewery.brewery.id)}>DETAILS</h4>
        </Link>
        <h4 className='favorite' onClick={() => addFavoriteBrewery(favorites, user.id, 'brewery', brewery.brewery.id, brewery)}>FAVORITE</h4>
      </div>
    );
  } else {
    return (
      <div className={ brewery.brewery.isFav ? 'beer-card brewery-card favorite-card' : 'beer-card brewery-card' }>
        <Link to={'/brewery/' + brewery.brewery.id}>
          <h2 onClick={() => getBrewery(brewery.brewery.id)}>{brewery.brewery.name}</h2>
        </Link>
        <h3>{brewery ? brewery.locality + ", " + brewery.region : ''}</h3>
        <Link to={'/brewery/' + brewery.brewery.id}>
          {brewery.brewery.images ? <img onClick={() => getBrewery(brewery.brewery.id)} className='brewery-logo' src={brewery.brewery.images.squareMedium}></img>: <img onClick={() => getBrewery(brewery.brewery.id)} className='brewery-icon' src={beer1}></img>}
        </Link>
        <h3 className='type'>{brewery ? brewery.locationTypeDisplay : ''}</h3>
        <Link to={'/brewery/' + brewery.brewery.id}>
          <h4 onClick={() => getBrewery(brewery.brewery.id)}>DETAILS</h4>
        </Link>
        <Link to='/login'><h4 className='favorite'>FAVORITE</h4></Link>
      </div>
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
