import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import BeerCard from './BeerCard.js'

class Brewery extends Component {
  constructor() {
    super();
  }

  //setup dynamic routing for current list of beers

  componentWillReceiveProps(nextProps) {
    if (this.props.brewery !== nextProps.brewery) {
      nextProps.getBreweryBeers(nextProps.brewery.id);
    }
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

  renderBeers() {
    const { breweryBeers } = this.props;
    if (breweryBeers) {
      return breweryBeers.map( beer => {
        return <BeerCard
          beer={beer}
          key={beer.id}/>;
      });
    }
  }

  render() {
    return (
      <div className='brewery'>
        {this.renderBrewery()}
        <div className='brewery-beers'>
          {this.renderBeers()}
        </div>
      </div>
    );
  }

}


Brewery.propTypes = {
  brewery: PropTypes.object,
  breweryBeers: PropTypes.array,
  getBreweryBeers: PropTypes.func
};

export default Brewery;
