import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeatureBeer = ({ featureBeer, getBrewery }) => {

  const showBrewery = id => {
    getBrewery(id);
  };


  if (featureBeer.breweries) {
    return (
      <div className='feature-beer' onClick={() => showBrewery(featureBeer.breweries[0].id)}>
        <h1>Featured Beer</h1>
        <h2>{featureBeer.name}</h2>
        <Link to='/brewery'><img className='brewery-logo' src={featureBeer.labels.medium}></img></Link>
        <h3>{featureBeer.breweries[0].name}</h3>
        <h3>{featureBeer.breweries[0].locations[0].locality}, {featureBeer.breweries[0].locations[0].region}</h3>
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
  getBrewery: PropTypes.func
};

export default FeatureBeer;
