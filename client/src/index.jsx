import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.jsx';
import store from './store.js';
import handleProductSearch from './actions/productSearch';
// import $ from 'jquery';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  () => handleProductSearch('Heir Force Ones')(store.dispatch)
);
