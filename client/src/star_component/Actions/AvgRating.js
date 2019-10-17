const getNewData = data => ({ type: 'GET_AVGDATA', data });

const averageRating = rating => ({ type: 'AVG_RATING', rating });

export { getNewData, averageRating };
