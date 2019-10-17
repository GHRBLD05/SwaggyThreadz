import Redux from 'redux';

const currentStyleReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_STYLE':
      return action.currentStyle;
    default:
      return state;
  }
};

export default currentStyleReducer;
