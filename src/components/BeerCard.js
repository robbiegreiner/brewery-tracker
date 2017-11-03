import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BeerCard = ({ beer, setCurrentBeer, writeUserData, user }) => {
  return (
    <div className='beer-card' >
      <h2 onClick={() => setCurrentBeer(beer)}>{beer.name}</h2>
      <h3>{beer.brewies ? beer.breweries[0].name : 'no brewery info'}</h3>
      <h3>{beer.style ? beer.style.name : 'no style'}</h3>
      <h3>{beer.abv}</h3>
      <Link to={'/beer/' + beer.id}><h4>View Beer Details</h4></Link>
      <h4 onClick={() => writeUserData(user.id, 'beer', beer.id )}>FAVORITE</h4>
    </div>
  );
};

BeerCard.propTypes = {
  beer: PropTypes.object,
  setCurrentBeer: PropTypes.func,
  writeUserData: PropTypes.func,
  user: PropTypes.object
};

export default BeerCard;
