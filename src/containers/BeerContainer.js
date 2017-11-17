import { connect } from 'react-redux';
import Beer from '../components/Beer';
import { fetchBeerByID, deleteFavoriteBeer, addFavoriteBeer, fetchBrewery } from '../actions/actions';



const mapStateToProps = store => ({
  currentBeer: store.currentBeer,
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  getBeerByID: (id) => {
    dispatch(fetchBeerByID(id));
  },
  removeFavoriteBeer: (userId, firebaseID) => {
    dispatch(deleteFavoriteBeer(userId, firebaseID));
  },
  addFavoriteBeer: (userId, type, id, beer) => {
    dispatch(addFavoriteBeer(userId, type, id, beer));
  },
  getBrewery: (id) => {
    dispatch(fetchBrewery(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
