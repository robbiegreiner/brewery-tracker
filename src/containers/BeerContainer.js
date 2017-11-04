import { connect } from 'react-redux';
import Beer from '../components/Beer';
import { fetchBeerByID, deleteFavorite } from '../actions/actions';



const mapStateToProps = store => ({
  currentBeer: store.currentBeer
});

const mapDispatchToProps = dispatch => ({
  getBeerByID: (id) => {
    dispatch(fetchBeerByID(id));
  },
  removeFavorite: (userId, firebaseID) => {
    dispatch(deleteFavorite(userId, firebaseID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
