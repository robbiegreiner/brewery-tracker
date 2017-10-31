import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Beer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { currentBeer, getBeerByID } = this.props;
    if (Object.keys(currentBeer)) {
      console.log('hey');
      getBeerByID(this.props.match.params.beer_id);
    }
  }
  renderBeer(beer){
    if (beer){
      return (
        <div className='big-beer'>
          <h1>{beer.name}</h1>
          {beer.labels ? <img className='brewery-logo' src={beer.labels.medium}></img> : ''}
          <h3>{beer.breweries ? beer.breweries[0].name : 'no brewery'}</h3>
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
