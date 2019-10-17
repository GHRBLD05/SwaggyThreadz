import Redux from 'redux';

const stylesArrayReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_STYLES_ARRAY':
      return action.stylesArray || [];
    default:
      return state;
  }
};

export default stylesArrayReducer;
