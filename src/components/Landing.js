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

  handleChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  searchClick() {
    // create action creator
    // create api call function
    // api call function dispatches action
    // action goes to reducer with results payload
    // payload goes up to container
    // container calls Component


    // pass in searchValue


  }



  render() {
    return (
      <div className='landing'>
        <h1>Landing & Search Here</h1>
        <input placeholder="Search" onChange= {(event ) => this.handleChange(event)}></input>
        <button>City</button>
        <button>Brewery</button>
        <button>Beer</button>
        <button>Style</button>
      </div>
    );

  }
}

export default Landing;
