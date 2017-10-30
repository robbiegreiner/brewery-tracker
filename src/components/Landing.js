import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FeatureBrewery from './FeatureBrewery';
import FeatureBeer from './FeatureBeer';


class Landing extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }

  componentDidMount() {
    this.props.getFeatures();
  }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  searchClick() {
    const { searchAll } = this.props;
    searchAll(this.state.searchValue);
  }

  render() {
    return (
      <div className='landing'>
        <div className='search-area'>
          <h1>Search for Beers & Breweries</h1>
          <div className='search-container'>
            <input placeholder="Search" onChange= {(event ) => this.handleChange(event)}></input>
            <Link to='/searchresults'>
              <button
                onClick={ () => this.searchClick() }>City, State
              </button>
              <button
                onClick={ () => this.searchClick() }>Beer
              </button>
              <button
                onClick={ () => this.searchClick() }>Brewery
              </button>
              <button
                onClick={ () => this.searchClick() }>Style
              </button>
            </Link>
          </div>
        </div>
        <div className='feature-section'>
          <FeatureBrewery
            featureBrewery={this.props.featureBrewery}
            getBrewery ={this.props.getBrewery}/>
          <FeatureBeer
            featureBeer={this.props.featureBeer}
            getBrewery ={this.props.getBrewery}/>
        </div>
      </div>
    );

  }
}

Landing.propTypes = {
  searchAll: PropTypes.func,
  featureBrewery: PropTypes.object,
  featureBeer: PropTypes.object,
  getFeatures: PropTypes.func,
  getBrewery: PropTypes.func
};

export default Landing;
