import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


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

  renderRandomBrewery() {
    const { randomBrewery } = this.props;
    if (randomBrewery.images) {
      return (
        <div className='random-brewery'>
          <h2>{randomBrewery.name}</h2>
          <img src={randomBrewery.images.large}></img>
          <h3>{randomBrewery.website}</h3>
          <p>{randomBrewery.description ? randomBrewery.description : 'no description provided'}</p>
        </div>
      );
    }
  }



  render() {
    return (
      <div className='landing'>
        <h1>Landing & Search Here</h1>
        <input placeholder="Search" onChange= {(event ) => this.handleChange(event)}></input>
        <Link to='/searchresults'>
          <button onClick={ () => this.searchClick() }>Go</button>
        </Link>
        <div className='random-breweries'>
          <h2>Random Breweries</h2>
          {this.renderRandomBrewery()}
        </div>
      </div>
    );

  }
}

Landing.propTypes = {
  searchAll: PropTypes.func,
  randomBrewery: PropTypes.object,
  getRandomBrewery: PropTypes.func
};

export default Landing;
