import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BeerCard = ({ beer, setCurrentBeer, addFavoriteBeer, user, removeFavoriteBeer }) => {
  return (
    <div className={ beer.isFav ? 'favorite-card' : 'beer-card' }>
      <h2 onClick={() => setCurrentBeer(beer)}>{beer.name}</h2>
      <h3>{beer.breweries ? beer.breweries[0].name : 'no brewery info'}</h3>
      <h3>{beer.style ? beer.style.name : 'no style'}</h3>
      <h3>{beer.abv}</h3>
      <Link to={'/beer/' + beer.id}><h4>View Beer Details</h4></Link>
      { removeFavoriteBeer ? <h4 onClick={() => removeFavoriteBeer(user.id, beer.firebaseID)}>UNFAVORITE</h4> : <h4 onClick={() => addFavoriteBeer(user.id, 'beer', beer.id, beer )}>FAVORITE</h4>}
    </div>
  );
};

BeerCard.propTypes = {
  beer: PropTypes.object,
  setCurrentBeer: PropTypes.func,
  writeUserData: PropTypes.func,
  user: PropTypes.object,
  removeFavorite: PropTypes.func,
  removeFavoriteBeer: PropTypes.func
};

export default BeerCard;
