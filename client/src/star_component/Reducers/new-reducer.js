const getNewData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWDATA' :
      return action.data;
      default:
        return state;
  }
};

const averageRating = (state = 0; action) => {
  switch (action.type) {
    case 'AVG_RATING' :
      return action.rating;
        default:
          return state;
  }
};
export { getNewData, averageRating };