import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeatureBeer = ({ featureBeer, setCurrentBeer }) => {


  if (featureBeer.breweries) {
    return (
      <div className='feature-beer'>
        <h1>Featured Beer</h1>
        <Link onClick={() => setCurrentBeer(featureBeer)} to={'/beer/' + featureBeer.id}>
          <h2>{featureBeer.name}</h2>
          <img className='brewery-logo-2' src={featureBeer.labels.medium}></img>
          <h3>{featureBeer.breweries[0].name}</h3>
        </Link>
        <a href={featureBeer.breweries[0].website}>{featureBeer.breweries[0].website}</a>
        <h3 className='feature-location'>{featureBeer.breweries[0].locations[0].locality}, {featureBeer.breweries[0].locations[0].region}</h3>
        <p>{featureBeer.description}</p>
      </div>
    );
  } else {
    return (
      <h4>Featured Beer</h4>
    );
  }
};

FeatureBeer.propTypes = {
  featureBeer: PropTypes.object,
  getBrewery: PropTypes.func,
  setCurrentBeer: PropTypes.func
};

export default FeatureBeer;
