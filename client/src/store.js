import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';

const initialState = {
  currentProduct: {
    id: 0,
    name: '',
    slogan: '',
    description: '',
    category: '',
    default_price: '',
    features: [
      {
        feature: '',
        value: '',
      },
    ],
  },
  currentStyle: {
    style_id: 0,
    name: '',
    original_price: '',
    sale_price: '0',
    'default?': 0,
    photos: [
      {
        thumbnail_url: '',
        url: '',
      },
    ],
    skus: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },
  stylesArray: [
    {
      style_id: 0,
      name: '',
      original_price: '',
      sale_price: '0',
      'default?': 0,
      photos: [
        {
          thumbnail_url: '',
          url: '',
        },
      ],
      skus: {
        XS: 0,
        S: 0,
        M: 0,
        L: 0,
        XL: 0,
      },
    },
  ],
  relatedProducts: [
    {
      id: 0,
      name: '',
      slogan: '',
      description: '',
      category: '',
      default_price: '',
      features: [
        {
          feature: '',
          value: '',
        },
      ],
    },
  ],
  currentSize: '',
};

export default createStore(rootReducer, initialState, applyMiddleware(thunk));
