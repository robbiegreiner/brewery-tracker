import { connect } from 'react-redux';
import Brewery from '../components/Brewery';
import { fetchBreweryBeers, setCurrentBeer } from '../actions/actions';


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
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Brewery);
