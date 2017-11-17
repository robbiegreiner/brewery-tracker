import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeatureBrewery = ({ featureBrewery, getBrewery }) => {


  if (featureBrewery.images) {
    return (
      <div className='feature-brewery'>
        <h1>Featured Brewery</h1>
        <Link to={'/brewery/' + featureBrewery.id} onClick={() => getBrewery(featureBrewery.id)}>
          <h2>{featureBrewery.name}</h2>
          <img className=' feature-brewery-logo brewery-logo-2' src={featureBrewery.images.large}></img>
        </Link>
        <h3>{featureBrewery.locations[0].locality}, {featureBrewery.locations[0].region}</h3>
        <a href={featureBrewery.website}>{featureBrewery.website}</a>
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
