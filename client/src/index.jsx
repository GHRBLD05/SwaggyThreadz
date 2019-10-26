import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.jsx';
import store from './store.js';
import initializeProduct from './actions/initializeProduct';
// import $ from 'jquery';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  () => initializeProduct('Heir Force Ones')(store.dispatch)
);
