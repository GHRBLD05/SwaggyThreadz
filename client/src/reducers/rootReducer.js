import { combineReducers } from 'redux';
import currentStyleReducer from './currentStyleReducer.js';
import currentProductReducer from './currentProductReducer.js';
import stylesArrayReducer from './stylesArrayReducer.js';
import currentSizeReducer from './currentSizeReducer.js';

const rootReducer = combineReducers({
  product: currentProductReducer,
  style: currentStyleReducer,
  styleArray: stylesArrayReducer,
  size: currentSizeReducer,
});

export default rootReducer;
