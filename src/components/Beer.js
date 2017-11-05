import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import beer2 from '../assets/beer4.svg';

class Beer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { currentBeer, getBeerByID, match } = this.props;
    getBeerByID(match.params.beer_id);
  }
  renderBeer(beer){
    if (beer){
      return (
        <div className='big-beer'>
          <h1>{beer.name}</h1>
          {beer.labels ? <img className='big-beer-logo' src={beer.labels.large}></img> : <img src={beer2}></img>}
          <h3>{beer.breweries ? <Link to={'/brewery/' + beer.breweries[0].id}>{beer.breweries[0].name}</Link> : 'no brewery'}</h3>
          <h3>{beer.style ? beer.style.name : 'no style'}</h3>
          <h3>{beer.abv}% ABV</h3>
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
  currentBeer: PropTypes.object,
  match: PropTypes.object,
  removeFavorite: PropTypes.func,
  getBrewery: PropTypes.func
};

export default Beer;
