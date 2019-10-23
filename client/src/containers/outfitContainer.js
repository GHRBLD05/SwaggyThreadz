import { connect } from 'react-redux';
import Outfit from '../relatedAndOutfit/outfit.jsx';

const mapStateToProps = state => ({
  currentProduct: state.currentProduct,
});

const OutfitContainer = connect(
  mapStateToProps,
  null
)(Outfit);

export default OutfitContainer;
