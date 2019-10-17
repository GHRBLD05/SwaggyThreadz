import Redux from 'redux';

const relatedProductsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_RELATED_PRODUCTS':
      return action.relatedProducts || [];
    default:
      return state;
  }
};

export default relatedProductsReducer;
