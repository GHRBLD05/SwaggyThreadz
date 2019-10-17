import { connect } from 'react-redux';
import Related from '../relatedAndOutfit/related.jsx';
import changeProduct from '../actions/currentProduct.js';
import changeStyle from '../actions/currentStyle.js';
import changeStylesArray from '../actions/stylesArray.js';
import changeRelatedProducts from '../actions/relatedProducts.js';

const mapStateToProps = state => ({
  currentProduct: state.currentProduct,
  currentStyle: state.currentStyle,
  stylesArray: state.stylesArray,
  currentSize: state.currentSize,
  relatedProducts: state.relatedProducts,
});

// const mapDispatchToProps = dispatch => ({
//   handleProductClick: (product, style, stylesArray, relatedProducts) => {
//     dispatch(changeProduct(product));
//     dispatch(changeStyle(style));
//     dispatch(changeStylesArray(stylesArray));
//     dispatch(changeRelatedProducts(relatedProducts));
//   },
// });

const RelatedProductsContainer = connect(
  mapStateToProps,
  null
)(Related);

export default RelatedProductsContainer;
