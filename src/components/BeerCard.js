import React from 'react';
import PropTypes from 'prop-types';

const BeerCard = ({ beer }) => {
  return (
    <div className='beer-card'>
      <h2>{beer.name}</h2>
      {/* <h3>{beer.breweries[0].name}</h3> */}
      {/* <h3>{beer.style.name}</h3> */}
      <h3>{beer.abv}</h3>
    </div>
  );
};

BeerCard.propTypes = {
  beer: PropTypes.object
};

export default BeerCard;
