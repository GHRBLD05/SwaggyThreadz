import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';

const initialState = {
  currentProduct: null,
  currentStyle: null,
  stylesArray: [],
  currentSize: '',
};

export default createStore(rootReducer, initialState, applyMiddleware(thunk));
