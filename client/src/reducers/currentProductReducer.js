import Redux from 'redux';

const currentProductReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_PRODUCT':
      return action.currentProduct || null;
    default:
      return state;
  }
};

export default currentProductReducer;
