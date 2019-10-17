import $ from 'jquery';
import 'regenerator-runtime/runtime';

const productList = [];

const apiUrl = 'http://52.26.193.201:3000/products/';

const updateProductList = () =>
  new Promise((resolve, reject) => {
    $.get('http://52.26.193.201:3000/products/list?count=10050', list => {
      list.forEach(element => {
        productList.push({
          id: element.id,
          name: element.name,
        });
      });
      resolve(productList);
    });
  });

const getIdFromName = productName => {
  for (const product of productList) {
    if (product.name === productName) {
      return product.id;
    }
  }
};

const getRelatedIDs = id =>
  new Promise((resolve, reject) => {
    $.get(
      `http://52.26.193.201:3000/products/${id}/related`,
      relatedIDsFromRequest => {
        resolve(relatedIDsFromRequest);
      }
    );
  });

const getProduct = id =>
  new Promise((resolve, reject) => {
    $.get(`${apiUrl}${id}`, product => {
      resolve(product);
    });
  });

const getRelatedProducts = async relatedIDs => {
  const relatedProducts = [];
  for (const id of relatedIDs) {
    const product = await getProduct(id);
    relatedProducts.push(product);
  }
  return relatedProducts;
};

const getRelatedStyles = id =>
  new Promise((resolve, reject) => {
    $.get(`http://52.26.193.201:3000/products/${id}/styles`, data => {
      resolve(data);
    });
  });

const addImageToRelated = async relatedProducts => {
  for (const product of relatedProducts) {
    const currStyles = await getRelatedStyles(product.id);
    product.thumbnail_url = currStyles.results[0].photos[0].thumbnail_url;
    product.url = currStyles.results[0].photos[0].url;
  }
  return relatedProducts;
};

const getStyles = id =>
  new Promise((resolve, reject) => {
    $.get(`http://52.26.193.201:3000/products/${id}/styles`, products => {
      const styles = [];
      products.results.forEach(product => {
        styles.push(product);
      });
      resolve(styles);
    });
  });

const getCurrentProduct = id =>
  new Promise((resolve, reject) => {
    $.get(`${apiUrl}${id}`, product => {
      resolve(product);
    });
  });

const handleSearch = (productName, callback) => {
  updateProductList()
    .then(() => getIdFromName(productName))
    .then(productID =>
      Promise.all([
        getStyles(productID),
        getRelatedIDs(productID),
        getCurrentProduct(productID),
      ])
    )
    .then(results =>
      Promise.all([
        results[0],
        results[1],
        results[2],
        getRelatedProducts(results[1]),
      ])
    )
    .then(results =>
      Promise.all([
        results[0],
        results[1],
        results[2],
        addImageToRelated(results[3]),
      ])
    )
    .then(results =>
      callback(results[2], results[0], results[0][0], results[3])
    );
};
export default handleSearch;
