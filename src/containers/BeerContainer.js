import { connect } from 'react-redux';
import Beer from '../components/Beer';
import { fetchBeerByID } from '../actions/actions'



const mapStateToProps = store => ({
  currentBeer: store.currentBeer
});

const mapDispatchToProps = dispatch => ({
  getBeerByID: (id) => {
    dispatch(fetchBeerByID(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
