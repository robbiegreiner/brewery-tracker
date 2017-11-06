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
        <a className='website' href={brewery.website}>{brewery.website}</a>
        <h3 className='type'>{brewery ? brewery.locationTypeDisplay : ''}</h3>
        <div className='bottom-btns'>
          <Link to={'/brewery/' + brewery.brewery.id}>
            <button className='view-beer' onClick={() => getBrewery(brewery.brewery.id)}>DETAILS</button>
          </Link>
          <button className='favorite' onClick={() => addFavoriteBrewery(favorites, user.id, 'brewery', brewery.brewery.id, brewery)}>FAVORITE</button>
        </div>
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
        <a className='website' href={brewery.website}>{brewery.website}</a>
        <h3 className='type'>{brewery ? brewery.locationTypeDisplay : ''}</h3>
        <div className='bottom-btns'>
          <Link to={'/brewery/' + brewery.brewery.id}>
            <button className='view-beer' onClick={() => getBrewery(brewery.brewery.id)}>DETAILS</button>
          </Link>
          <Link to='/login'><button className='favorite'>FAVORITE</button></Link>
        </div>
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
