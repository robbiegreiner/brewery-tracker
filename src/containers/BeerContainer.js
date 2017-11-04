import { connect } from 'react-redux';
import Beer from '../components/Beer';
import { fetchBeerByID, deleteFavoriteBeer, addFavoriteBeer } from '../actions/actions';



const mapStateToProps = store => ({
  currentBeer: store.currentBeer
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
