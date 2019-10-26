import { connect } from 'react-redux';
import Related from '../relatedAndOutfit/related.jsx';
import handleProductChange from '../actions/productChange.js';

const mapStateToProps = state => ({
  currentProduct: state.currentProduct,
  relatedProducts: state.relatedProducts,
  productList: state.productList,
});

const mapDispatchToProps = dispatch => ({
  handleProductClick: (productName, productList) =>
    dispatch(handleProductChange(productName, productList)),
});

const RelatedProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Related);

export default RelatedProductsContainer;
