import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import LoginContainer from '../containers/LoginContainer';
import LandingContainer from '../containers/LandingContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={ HeaderContainer } />
        <Route path="/" component={ LoginContainer } />
        <Route path="/" component={ LandingContainer } />
      </div>
    );
  }
}

export default App;
