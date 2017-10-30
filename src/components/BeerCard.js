import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BeerCard = ({ beer, setCurrentBeer }) => {
  return (
    <Link to='/beer'>
      <div className='beer-card' onClick={() => setCurrentBeer(beer)}>
        <h2>{beer.name}</h2>
        <h3>{beer.breweries[0].name}</h3>
        <h3>{beer.style ? beer.style.name : 'no style'}</h3>
        <h3>{beer.abv}</h3>
      </div>
    </Link>
  );
};

BeerCard.propTypes = {
  beer: PropTypes.object,
  setCurrentBeer: PropTypes.func
};

export default BeerCard;
