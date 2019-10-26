import $ from 'jquery';
import handleProductChange from './productChange.js';
import setProductList from './setProductList.js';

const initializeProduct = productName => dispatch => {
  const productList = [];
  console.log('intializing product to: ', productName);

  $.get('http://52.26.193.201:3000/products/list?count=10050', list => {
    list.forEach(element => {
      productList.push({
        id: element.id,
        name: element.name,
      });
    });
    console.log('productList: ', productList);
    dispatch(handleProductChange(productName, productList));
    dispatch(setProductList(productList));
  });
  console.log('done initializing');
};

export default initializeProduct;
