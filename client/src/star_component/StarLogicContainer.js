import { connect } from 'react-redux';
import StarLogicContainer from './StarLogicContainer.jsx';

const mapStateToProps = state => ({
  averageRating: state.currentProduct.averageRating,
  metaData: state.currentProduct.metaData,

});


const StarLogicContainer = connect(
  mapStateToProps,
  null
)(StarLogic);

export default StarLogicContainer;