import { connect } from 'react-redux';
import Brewery from '../components/Brewery';
import { fetchBreweryBeers, setCurrentBeer, fetchBrewery } from '../actions/actions';


const mapStateToProps = store => ({
  brewery: store.brewery,
  breweryBeers: store.breweryBeers
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Brewery);
