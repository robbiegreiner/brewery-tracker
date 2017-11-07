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
    if (this.props.user) {
      this.props.getFavorites(this.props.user.id);
    }
  }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  searchClick(type) {
    const { searchAll } = this.props;
    searchAll(this.state.searchValue, type);
  }

  searchCityState(searchType) {
    const { searchCity } = this.props;
    const cityAndState = this.state.searchValue.split(',');
    const city = cityAndState[0];
    let state = '';

    if (cityAndState[1]) {
      state = cityAndState[1];
    }
    searchCity(city, state, searchType);
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
                onClick={ () => this.searchClick('beer') }>Beers
              </button>
              <button
                onClick={ () => this.searchClick('brewery') }>Breweries
              </button>
              <button
                onClick={ () => this.searchCityState('city') }>City
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
            setCurrentBeer ={this.props.setCurrentBeer}/>
        </div>
        <footer>
          <h3>© Robbie Greiner 2017</h3>
          <h3>Thanks for Visiting!</h3>
        </footer>
      </div>
    );

  }
}

Landing.propTypes = {
  searchAll: PropTypes.func,
  featureBrewery: PropTypes.object,
  featureBeer: PropTypes.object,
  getFeatures: PropTypes.func,
  getBrewery: PropTypes.func,
  searchCity: PropTypes.func,
  user: PropTypes.object,
  getFavorites: PropTypes.func,
  setCurrentBeer: PropTypes.func
};

export default Landing;
