import { connect } from 'react-redux';
import Overview from '../overview_components/overview.jsx';
import handleProductSearch from '../actions/productSearch.js';

const mapStateToProps = state => ({
  currentProduct: state.currentProduct,
  currentStyle: state.currentStyle,
  StylesArray: state.StylesArray,
  currentSize: state.currentSize,
});

const mapDispatchToProps = dispatch => ({
  handleSearch: q => {
    dispatch(handleProductSearch(q));
  },
});

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);

export default OverviewContainer;
