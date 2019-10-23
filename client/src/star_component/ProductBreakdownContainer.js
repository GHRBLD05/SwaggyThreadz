import { connect } from 'react-redux';
import ProductBreakdown from './ProductBreakdown.jsx';

const mapStateToProps = state => ({
  averageRating: state.currentProduct.averageRating,
  metaData: state.currentProduct.metaData,

});


const ProductBreakdownContainer = connect(
  mapStateToProps,
  null
)(ProductBreakdown);

export default ProductBreakdownContainer;
