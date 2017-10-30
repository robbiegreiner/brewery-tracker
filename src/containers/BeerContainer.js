import { connect } from 'react-redux';
import Beer from '../components/Beer';



const mapStateToProps = store => ({
  currentBeer: store.currentBeer
});

const mapDispatchToProps = dispatch => ({


});

export default connect(mapStateToProps, mapDispatchToProps)(Beer);
