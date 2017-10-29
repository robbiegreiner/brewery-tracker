import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Brewery extends Component {
  constructor() {
    super();
  }

  renderBrewery() {
    const { brewery } = this.props;
    if (brewery.images) {
      return (
        <div className='brewery'>
          <h3>Brewery</h3>
          <h2>{brewery.name}</h2>
          <img className='brewery-logo' src={brewery.images.large}></img>
          <h4>{brewery.website}</h4>
          <p>{brewery.description ? brewery.description : 'no description provided'}</p>
        </div>
      );
    } else {
      return (
        <h4>Brewery</h4>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderBrewery()}
      </div>
    );
  }

}


Brewery.propTypes = {
  brewery: PropTypes.object
};

export default Brewery;
