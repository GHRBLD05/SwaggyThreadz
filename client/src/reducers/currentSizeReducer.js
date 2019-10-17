import Redux from 'redux';

const currentSizeReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SIZE':
      return action.currentSize || '';
    default:
      return state;
  }
};

export default currentSizeReducer;
