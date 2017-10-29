import React from 'react';
import PropTypes from 'prop-types';

const BreweryCard = ({ brewery }) => {
  return (
    <div className='beer-card'>
      <h2>{brewery.name}</h2>
      <h3>{brewery.locations[0].locality}, {brewery.locations[0].region}</h3>

      {/* <h3>{beer.style.name}</h3>
      <h3>{beer.abv}</h3> */}
    </div>
  );
};

BreweryCard.propTypes = {
  brewery: PropTypes.object
};

export default BreweryCard;
