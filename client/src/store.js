import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';

const initialState = {
  productList: [],
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
    questions: [
      {
        question_id: 0,
        question_body: '',
        question_date: '',
        asker_name: '',
        question_helpfulness: 0,
        reported: 0,
        answers: {
          '0': {
            id: 0,
            body: '',
            date: '',
            answerer_name: '',
            helpfulness: 0,
            photos: [],
          },
        },
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
