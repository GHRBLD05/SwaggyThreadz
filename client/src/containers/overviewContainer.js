import { connect } from 'react-redux';
import Overview from '../overview_components/overview.jsx';
import handleProductChange from '../actions/productChange.js';

const mapStateToProps = state => ({
  currentProduct: state.currentProduct,
  currentStyle: state.currentStyle,
  stylesArray: state.stylesArray,
  currentSize: state.currentSize,
  productList: state.productList,

});

const mapDispatchToProps = dispatch => ({
  handleSearch: name => {
    dispatch(handleProductChange(name));
  },
  handleProductClick: style => {
    dispatch(handleProductChange(style));
  },
});

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);

export default OverviewContainer;
