import { combineReducers } from 'redux';
import currentStyleReducer from './currentStyleReducer.js';
import currentProductReducer from './currentProductReducer.js';
import stylesArrayReducer from './stylesArrayReducer.js';
import currentSizeReducer from './currentSizeReducer.js';
import relatedProductsReducer from './relatedProductsReducer.js';

const rootReducer = combineReducers({
  currentProduct: currentProductReducer,
  currentStyle: currentStyleReducer,
  relatedProducts: relatedProductsReducer,
  stylesArray: stylesArrayReducer,
  currentSize: currentSizeReducer,
});

export default rootReducer;
