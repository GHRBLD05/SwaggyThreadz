import { connect } from 'react-redux';
import Related from '../relatedAndOutfit/related.jsx';
import changeProduct from '../actions/currentProduct.js';
import changeStyle from '../actions/currentStyle.js';
import changeStylesArray from '../actions/stylesArray.js';

const mapStateToProps = state => ({
  currentProduct: state.currentProduct,
  currentStyle: state.currentStyle,
  StylesArray: state.StylesArray,
  currentSize: state.currentSize,
});

const mapDispatchToProps = dispatch => ({
  handleProductClick: (product, style, stylesArray) => {
    dispatch(changeProduct(product));
    dispatch(changeStyle(style));
    dispatch(changeStylesArray(stylesArray));
  },
});

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Related);

export default OverviewContainer;
