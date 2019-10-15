import handleSearch from '../handleSearch';
import changeProduct from './currentProduct.js';
import changeStyle from './currentStyle.js';
import changeStylesArray from './stylesArray.js';

const handleProductSearch = q => dispatch => {
  handleSearch(q, (product, styles, currentStyle) => {
    dispatch(changeProduct(product));
    dispatch(changeStyle(currentStyle));
    dispatch(changeStylesArray(styles));
  });
};

export default handleProductSearch;
