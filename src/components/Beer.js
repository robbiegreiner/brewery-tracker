import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import beer2 from '../assets/beer4.svg';

class Beer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { getBeerByID, match } = this.props;
    getBeerByID(match.params.beer_id);
  }

  showFavoriteButton() {
    const { user, currentBeer, addFavoriteBeer } = this.props;
    if (user.email){
      return (
        <button className='favorite unfavorite' onClick={() => addFavoriteBeer(user.id, 'beer', currentBeer.id, currentBeer )}>FAVORITE</button>
      );
    } else {
      return (
        <Link to='/login'><button className='favorite'>FAVORITE</button></Link>
      );
    }
  }
  renderBeer(beer){
    if (beer){
      return (
        <div className='big-beer'>
          <h1>{beer.name}</h1>
          {this.showFavoriteButton()}
          {beer.labels ? <img className='big-beer-logo' src={beer.labels.large}></img> : <img className='big-beer-icon' src={beer2}></img>}
          <h2>{beer.breweries ? <Link to={'/brewery/' + beer.breweries[0].id}>{beer.breweries[0].name}</Link> : 'no brewery'}</h2>
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
  getBrewery: PropTypes.func,
  getBeerByID: PropTypes.func,
  addFavoriteBeer: PropTypes.func,
  user: PropTypes.object
};

export default Beer;
