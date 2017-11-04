import { connect } from 'react-redux';
import Brewery from '../components/Brewery';
import { fetchBreweryBeers, setCurrentBeer, fetchBrewery, deleteFavorite } from '../actions/actions';


const mapStateToProps = store => ({
  brewery: store.brewery,
  breweryBeers: store.breweryBeers,
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  getBreweryBeers: (id) => {
    dispatch(fetchBreweryBeers(id));
  },
  setCurrentBeer: (beer) => {
    dispatch(setCurrentBeer(beer));
  },
  getBrewery: (id) => {
    dispatch(fetchBrewery(id));
  },
  removeFavorite: (userId, firebaseID) => {
    dispatch(deleteFavorite(userId, firebaseID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Brewery);
