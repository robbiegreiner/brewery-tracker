import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BeerCard = ({ beer, setCurrentBeer, writeUserData, user }) => {
  return (
    <Link to={'/beer/' + beer.id}>
      <div className='beer-card' >
        <h2 onClick={() => setCurrentBeer(beer)}>{beer.name}</h2>
        <h3>{beer.brewies ? beer.breweries[0].name : 'no brewery info'}</h3>
        <h3>{beer.style ? beer.style.name : 'no style'}</h3>
        <h3>{beer.abv}</h3>
        <h4 onClick={() => writeUserData(user.id, 'beer', beer.id)}>FAVORITE</h4>
      </div>
    </Link>
  );
};

BeerCard.propTypes = {
  beer: PropTypes.object,
  setCurrentBeer: PropTypes.func,
  writeUserData: PropTypes.func,
  user: PropTypes.object
};

export default BeerCard;
