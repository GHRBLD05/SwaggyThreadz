import { connect } from 'react-redux';
import Related from '../relatedAndOutfit/related.jsx';
// import changeProduct from '../actions/currentProduct.js';
// import changeStyle from '../actions/currentStyle.js';
// import changeStylesArray from '../actions/stylesArray.js';
// import changeRelatedProducts from '../actions/relatedProducts.js';
import handleProductChange from '../actions/productChange.js';

const mapStateToProps = state => ({
  relatedProducts: state.relatedProducts,
});

const mapDispatchToProps = dispatch => ({
  handleProductClick: productName => dispatch(handleProductChange(productName)),
});

const RelatedProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Related);

export default RelatedProductsContainer;
