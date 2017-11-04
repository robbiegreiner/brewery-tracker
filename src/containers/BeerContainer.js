import { connect } from 'react-redux';
import Beer from '../components/Beer';
import { fetchBeerByID, deleteFavoriteBeer } from '../actions/actions';



const mapStateToProps = store => ({
  currentBeer: store.currentBeer
});

const mapDispatchToProps = dispatch => ({
  getBeerByID: (id) => {
    dispatch(fetchBeerByID(id));
  },
  removeFavoriteBeer: (userId, firebaseID) => {
    dispatch(deleteFavoriteBeer(userId, firebaseID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
