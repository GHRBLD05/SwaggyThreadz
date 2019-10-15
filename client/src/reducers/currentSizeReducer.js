import Redux from 'redux';

const currentSizeReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_SIZE':
      return action.currentStyle || null;
    default:
      return state;
  }
};

export default currentSizeReducer;
