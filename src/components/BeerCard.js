import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import beer1 from '../assets/beer2.svg';

const showFavoriteButton = (user, addFavoriteBeer, removeFavoriteBeer, beer) => {
  if (user.email && removeFavoriteBeer) {
    return (
      <button className='favorite unfavorite' onClick={() => removeFavoriteBeer(user.id, beer.firebaseID)}>UNFAVORITE</button>
    );
  } else if (user.email && !removeFavoriteBeer) {
    return (
      <button className='favorite unfavorite' onClick={() => addFavoriteBeer(user.id, 'beer', beer.id, beer )}>FAVORITE</button>
    );
  } else {
    return (
      <Link to='/login'><button className='favorite'>FAVORITE</button></Link>
    );
  }
};

const BeerCard = ({ beer, setCurrentBeer, addFavoriteBeer, user, removeFavoriteBeer }) => {
  if (beer.breweries){
    return (
      <div className={ beer.isFav ? 'favorite-card' : 'beer-card' }>
        <Link to={`/beer/${beer.id}`}>
          <h2 onClick={() => setCurrentBeer(beer)}>{beer.name}</h2>
        </Link>
        <Link to={`/brewery/${beer.breweries[0].id}`}>
          <h3>{beer.breweries ? beer.breweries[0].name : ''}</h3>
        </Link>
        <h4>{beer.breweries ? beer.breweries[0].locations[0].region: ''}</h4>
        <Link to={`/beer/${beer.id}`}>
          {beer.labels ? <img className='beer-logo' src={beer.labels.medium}></img> : <img className='beer-icon' src={beer1}></img> }
        </Link>
        <h3 className='style'>{beer.style ? beer.style.name : ''}</h3>
        <h3 className='abv'>{beer.abv ? beer.abv + "% ABV" : ''}</h3>
        <div className='bottom-btns'>
          <Link to={`/beer/${beer.id}`}><button className='view-beer'>DETAILS</button></Link>
          {showFavoriteButton(user, addFavoriteBeer, removeFavoriteBeer, beer)}
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

BeerCard.propTypes = {
  beer: PropTypes.object,
  setCurrentBeer: PropTypes.func,
  writeUserData: PropTypes.func,
  user: PropTypes.object,
  removeFavorite: PropTypes.func,
  removeFavoriteBeer: PropTypes.func,
  addFavoriteBeer: PropTypes.func
};

export default BeerCard;
