import changeCurrentProduct from '../changeCurrentProduct.js';
import changeProduct from './currentProduct.js';
import changeStyle from './currentStyle.js';
import changeStylesArray from './stylesArray.js';
import changeRelatedProducts from './relatedProducts.js';

const handleProductChange = (productName, productList) => dispatch => {
  console.log('handling product change');
  changeCurrentProduct(
    productName,
    productList,
    (product, styles, currentStyle, relatedProducts) => {
      dispatch(changeProduct(product));
      dispatch(changeStyle(currentStyle));
      dispatch(changeStylesArray(styles));
      dispatch(changeRelatedProducts(relatedProducts));
    }
  );
};

export default handleProductChange;
