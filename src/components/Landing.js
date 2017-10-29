import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RandomBrewery from './RandomBrewery';


class Landing extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }

  componentDidMount() {
    this.props.getRandomBrewery();
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
          <input placeholder="Search" onChange= {(event ) => this.handleChange(event)}></input>
          <Link to='/searchresults'>
            <button onClick={ () => this.searchClick() }>Go</button>
          </Link>
        </div>
        <div className='random-section'>
          <RandomBrewery
            randomBrewery={this.props.randomBrewery}
            getBrewery ={this.props.getBrewery}/>
        </div>
      </div>
    );

  }
}

Landing.propTypes = {
  searchAll: PropTypes.func,
  randomBrewery: PropTypes.object,
  getRandomBrewery: PropTypes.func,
  getBrewery: PropTypes.func
};

export default Landing;
