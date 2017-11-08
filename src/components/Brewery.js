import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BeerCard from './BeerCard.js';

class Brewery extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { brewery, getBrewery } = this.props;
    if (Object.keys(brewery)) {
      getBrewery(this.props.match.params.brewery_id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.brewery !== nextProps.brewery) {
      nextProps.getBreweryBeers(nextProps.brewery.id);
    }
  }

  showFavoriteButton() {
    const { brewery, user, favorites, addFavoriteBrewery } = this.props;
    if (user.email) {
      return (
        <button className='favorite favorite-2' onClick={() => addFavoriteBrewery(favorites, user.id, 'brewery', brewery.id, brewery)}>ADD FAVORITE</button>
      );
    } else {
      return (
        <Link to='/login'><button className='favorite favorite-2'>ADD FAVORITE</button></Link>
      );
    }
  }

  renderBrewery() {
    const { brewery } = this.props;

    if (brewery.name) {
      return (
        <div className='brewery'>
          <h1>{brewery.name}</h1>
          {brewery.images ? <img className='brewery-page-logo' src={brewery.images.large}></img> : ''}
          <div className='location-box'>
            <h2>{brewery.locations[0].name}</h2>
            <h3>{brewery.locations[0].streetAddress}</h3>
            <h3>{brewery.locations[0].locality + ", " + brewery.locations[0].region + " " + brewery.locations[0].postalCode }</h3>
            <h4>{brewery.website}</h4>
            {this.showFavoriteButton()}
          </div>
          <p>{brewery.description ? brewery.description : 'no description provided'}</p>
        </div>
      );
    } else {
      return (
        <h4>Brewery</h4>
      );
    }
  }

  renderBeers() {
    const { breweryBeers, setCurrentBeer, user, addFavoriteBeer, favorites } = this.props;
    if (breweryBeers) {
      return breweryBeers.map( beer => {
        return <BeerCard
          user={user}
          favorites={favorites}
          setCurrentBeer={setCurrentBeer}
          beer={beer}
          key={beer.id}
          addFavoriteBeer={addFavoriteBeer}/>;
      });
    }
  }

  render() {
    return (
      <div className='brewery'>
        {this.renderBrewery()}
        <h2>{this.props.brewery.name + " Beers"}</h2>
        <div className='brewery-beers'>
          {this.renderBeers()}
        </div>
      </div>
    );
  }

}


Brewery.propTypes = {
  brewery: PropTypes.object,
  breweryBeers: PropTypes.array,
  getBreweryBeers: PropTypes.func,
  setCurrentBeer: PropTypes.func,
  match: PropTypes.object,
  user: PropTypes.object,
  removeFavorite: PropTypes.func,
  removeFavoriteBeer: PropTypes.func,
  removeFavoriteBrewery: PropTypes.func,
  getBrewery: PropTypes.func,
  addFavoriteBeer: PropTypes.func,
  addFavoriteBrewery: PropTypes.func,
  favorites: PropTypes.object
};

export default Brewery;
