import $ from 'jquery';
import 'regenerator-runtime/runtime';

const apiUrl = 'http://52.26.193.201:3000/products/';

const updateProductList = () =>
  new Promise((resolve, reject) => {
    const productList = [];
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

const getIdFromName = (productName, productList) => {
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
    for (const elem of currStyles.results) {
      if (elem['default?'] === 1) {
        product.thumbnail_url = elem.photos[0].thumbnail_url;
        product.url = elem.photos[0].url;
        break;
      }
    }
    if (!product.url) {
      product.thumbnail_url = currStyles.results[0].photos[0].thumbnail_url;
      product.url = currStyles.results[0].photos[0].url;
    }
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
      let style = styles[0];
      for (const elem of styles) {
        if (elem['default?'] === 1) {
          style = elem;
          break;
        }
      }
      console.log('style: ', style);
      console.log('stylesArray: ', styles);
      resolve([styles, style]);
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
    .then(productList => getIdFromName(productName, productList))
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
      callback(results[2], results[0][0], results[0][1], results[3])
    );
};
export default handleSearch;
