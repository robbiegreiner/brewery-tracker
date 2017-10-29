import { connect } from 'react-redux';
import Brewery from '../components/Brewery';


const mapStateToProps = store => ({
  brewery: store.brewery
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Brewery);
