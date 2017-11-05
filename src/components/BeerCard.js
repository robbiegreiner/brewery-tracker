import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import beer1 from '../assets/beer2.svg';

const BeerCard = ({ beer, setCurrentBeer, addFavoriteBeer, user, removeFavoriteBeer }) => {
  if (user.email){
    return (
      <div className={ beer.isFav ? 'favorite-card' : 'beer-card' }>
        <h2 onClick={() => setCurrentBeer(beer)}>{beer.name}</h2>
        <h3>{beer.breweries ? beer.breweries[0].name : ''}</h3>
        <h4>{beer.breweries ? beer.breweries[0].locations[0].region: ''}</h4>
        {beer.labels ? <img className='beer-logo' src={beer.labels.medium}></img> : <img className='beer-icon' src={beer1}></img> }
        <h3 className='style'>{beer.style ? beer.style.name : ''}</h3>
        <h3 className='abv'>ABV: {beer.abv}</h3>
        <div className='bottom-btns'>
          <Link to={'/beer/' + beer.id}><h4 className='view-beer'>DETAILS</h4></Link>
          { removeFavoriteBeer ? <h4 className='favorite' onClick={() => removeFavoriteBeer(user.id, beer.firebaseID)}>UNFAVORITE</h4> : <h4 className='favorite' onClick={() => addFavoriteBeer(user.id, 'beer', beer.id, beer )}>FAVORITE</h4>}
        </div>
      </div>
    );
  } else {
    return (
      <div className={ beer.isFav ? 'favorite-card' : 'beer-card' }>
        <h2 onClick={() => setCurrentBeer(beer)}>{beer.name}</h2>
        <h3>{beer.breweries ? beer.breweries[0].name : ''}</h3>
        <h4>{beer.breweries ? beer.breweries[0].locations[0].region: ''}</h4>
        {beer.labels ? <img className='beer-logo' src={beer.labels.medium}></img> : <img className='beer-icon' src={beer1}></img> }
        <h3 className='style'>{beer.style ? beer.style.name : ''}</h3>
        <h3 className='abv'>ABV: {beer.abv}</h3>
        <div className='bottom-btns'>
          <Link to={'/beer/' + beer.id}><h4 className='view-beer'>DETAILS</h4></Link>
          <Link to='/login'><h4 className='favorite'>FAVORITE</h4></Link>
        </div>
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
  removeFavoriteBeer: PropTypes.func
};

export default BeerCard;
