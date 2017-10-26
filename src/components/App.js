import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import LoginContainer from '../containers/LoginContainer';
import LandingContainer from '../containers/LandingContainer';
import CreateAccountContainer from '../containers/CreateAccountContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={ HeaderContainer } />
        <Route path="/login" component={ LoginContainer } />
        <Route exact path="/" component={ LandingContainer } />
        <Route path="/createaccount" component={ CreateAccountContainer } />
      </div>
    );
  }
}

export default App;
