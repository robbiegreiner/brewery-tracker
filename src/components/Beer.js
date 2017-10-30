import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Beer extends Component {
  constructor() {
    super();
  }

  renderBeer(beer){
    if (beer){
      return (
        <div className='big-beer'>
          <h1>{beer.name}</h1>
          <h3>{beer.breweries[0].name}</h3>
          <h3>{beer.style ? beer.style.name : 'no style'}</h3>
          <h3>{beer.abv}</h3>
          <p>{beer.description}</p>
        </div>
      );
    } else {
      <h1>Beer!</h1>;
    }
  }


  render() {
    return (
      <div>
        {this.renderBeer(this.props.currentBeer)}
      </div>
    );
  }

}

Beer.propTypes = {
  currentBeer: PropTypes.object
};

export default Beer;
