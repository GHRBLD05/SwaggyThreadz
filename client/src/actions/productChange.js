import changeCurrentProduct from '../changeCurrentProduct.js';
import changeProduct from './currentProduct.js';
import changeStyle from './currentStyle.js';
import changeStylesArray from './stylesArray.js';
import changeRelatedProducts from './relatedProducts.js';

const handleProductChange = productName => dispatch => {
  changeCurrentProduct(
    productName,
    (product, styles, currentStyle, relatedProducts) => {
      dispatch(changeProduct(product));
      dispatch(changeStyle(currentStyle));
      dispatch(changeStylesArray(styles));
      dispatch(changeRelatedProducts(relatedProducts));
    }
  );
};

export default handleProductChange;
