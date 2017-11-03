// import firebase from '../firebase.js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getFavorites(this.props.user.id);
  }

  // getFavorites() {
  //   const { user } = this.props;
  //   const faves = firebase.database().ref(user.id + '/favorites');
  //   faves.on('value', (snapshot) => {
  //     this.setState({
  //       favoritesData: snapshot.val()
  //     });
  //   });
  // }

  render() {
    return (
      <div className='favorites'>
        <h1>Favorites Here!</h1>
      </div>
    );
  }

}

Favorites.propTypes = {
  user: PropTypes.object,
  getFavorites: PropTypes.func
};

export default Favorites;
