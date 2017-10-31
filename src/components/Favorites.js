import firebase from '../firebase.js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Favorites extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites() {
    const { user } = this.props;
    const faves = firebase.database().ref(user.id + '/favorites');
    faves.on('value', (snapshot) => {
      console.log(snapshot.val());
    });
  }

  render() {
    return (
      <div className='favorites'>
        <h1>Favorites Here!</h1>
      </div>
    );
  }

}

Favorites.propTypes = {
  user: PropTypes.object
};

export default Favorites;
