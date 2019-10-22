import { connect } from 'react-redux';
import Overview from '../overview_components/overview.jsx';
import handleProductChange from '../actions/productChange.js';

const mapStateToProps = state => ({
  currentProduct: state.currentProduct,
  currentStyle: state.currentStyle,
  stylesArray: state.stylesArray,
  currentSize: state.currentSize,
});

const mapDispatchToProps = dispatch => ({
  handleSearch: q => {
    dispatch(handleProductSearch(q));
  },
});

const OverviewContainer = connect(
  mapStateToProps,
  null
)(Overview);

export default OverviewContainer;
