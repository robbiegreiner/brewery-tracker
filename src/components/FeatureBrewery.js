import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeatureBrewery = ({ featureBrewery, getBrewery }) => {

  const showBrewery = id => {
    getBrewery(id);
  };


  if (featureBrewery.images) {
    return (
      <div className='feature-brewery' onClick={() => showBrewery(featureBrewery.id)}>
        <h1>Featured Brewery</h1>
        <h2>{featureBrewery.name}</h2>
        <Link to='/brewery'><img className='brewery-logo' src={featureBrewery.images.large}></img></Link>
        <h3>{featureBrewery.locations[0].locality}, {featureBrewery.locations[0].region}</h3>
        <h4>{featureBrewery.website}</h4>
        <p>{featureBrewery.description ? featureBrewery.description : 'no description provided'}</p>
      </div>
    );
  } else {
    return (
      <h4>Featured Brewery</h4>
    );
  }
};

FeatureBrewery.propTypes = {
  featureBrewery: PropTypes.object,
  getBrewery: PropTypes.func
};

export default FeatureBrewery;
