import handleSearch from '../handleSearch';
import changeProduct from './currentProduct.js';
import changeStyle from './currentStyle.js';
import changeStylesArray from './stylesArray.js';
import changeRelatedProducts from './relatedProducts.js';

const handleProductSearch = productName => dispatch => {
  handleSearch(
    productName,
    (product, styles, currentStyle, relatedProducts) => {
      dispatch(changeProduct(product));
      dispatch(changeStyle(currentStyle));
      dispatch(changeStylesArray(styles));
      dispatch(changeRelatedProducts(relatedProducts));
    }
  );
};

export default handleProductSearch;
