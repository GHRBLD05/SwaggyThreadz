import { connect } from 'react-redux';
import Outfit from '../relatedAndOutfit/outfit.jsx';

const mapStateToProps = state => ({
  currentProduct: state.currentProduct,
  currentStyle: state.currentStyle,
});

const OutfitContainer = connect(
  mapStateToProps,
  null
)(Outfit);

export default OutfitContainer;
