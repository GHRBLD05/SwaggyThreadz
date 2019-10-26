import $ from 'jquery';
import 'regenerator-runtime/runtime';

const apiUrl = 'http://52.26.193.201:3000/products/';

const getIdFromName = (productName, productList) => {
  for (const product of productList) {
    if (product.name === productName.toLowerCase()) {
      return product.id;
    }
  }
};

const getRelatedIDs = id =>
  new Promise((resolve, reject) => {
    $.get(
      `http://52.26.193.201:3000/products/${id}/related`,
      relatedIDsFromRequest => {
        const relatedIDs = [];
        for (const relatedID of relatedIDsFromRequest) {
          if (!relatedIDs.includes(relatedID) && relatedID !== id) {
            relatedIDs.push(relatedID);
          }
        }
        resolve(relatedIDs);
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

const getAvgRating = id =>
  new Promise((resolve, reject) => {
    $.get(`http://52.26.193.201:3000/reviews/${id}/list`, data => {
      if (data.results.length === 0) {
        resolve(null);
      } else {
        let avg = 0;
        for (const review of data.results) {
          avg += review.rating;
        }
        avg /= data.results.length;
        resolve(avg);
      }
    });
  });

const addRatingToRelated = async relatedProducts => {
  for (const product of relatedProducts) {
    const avgRating = await getAvgRating(product.id);
    product.averageRating = avgRating;
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
      resolve([styles, style]);
    });
  });

const getCurrentProduct = id =>
  new Promise((resolve, reject) => {
    $.get(`${apiUrl}${id}`, product => {
      resolve(product);
    });
    productChangedEvent.productId = id;
    document.getElementById('app').dispatchEvent(productChangedEvent);
  });

const addRatingToCurrent = product =>
  new Promise((resolve, reject) => {
    getAvgRating(product.id).then(averageRating => {
      product.averageRating = averageRating;
      resolve(product);
    });
  });

const addMetadataToCurrent = product =>
  new Promise((resolve, reject) => {
    $.get(`http://52.26.193.201:3000/reviews/${product.id}/meta`, metaData => {
      product.metaData = metaData;
      resolve(product);
    });
  });

const addQuestionsToCurrent = product =>
  new Promise((resolve, reject) => {
    $.get(`http://52.26.193.201:3000/qa/${product.id}`, questionData => {
      product.questions = questionData.results.sort(function(a, b) {
        const itemA = a.question_helpfulness;
        const itemB = b.question_helpfulness;
        let comparison = 0;
        if (itemB > itemA) {
          comparison = 1;
        } else if (itemB < itemA) {
          comparison = -1;
        }
        return comparison;
      });
      resolve(product);
    });
  });

const changeCurrentProduct = (productName, productList, callback) => {
  const productID = getIdFromName(productName, productList);
  Promise.all([
    getStyles(productID),
    getRelatedIDs(productID),
    getCurrentProduct(productID),
  ])
    .then(([[styles, style], relatedIDs, currentProduct]) =>
      Promise.all([
        styles,
        style,
        addRatingToCurrent(currentProduct),
        getRelatedProducts(relatedIDs),
      ])
    )
    .then(([styles, style, currentProduct, relatedProducts]) =>
      Promise.all([
        styles,
        style,
        addMetadataToCurrent(currentProduct),
        addImageToRelated(relatedProducts),
      ])
    )
    .then(([styles, style, currentProduct, relatedProducts]) =>
      Promise.all([
        styles,
        style,
        addQuestionsToCurrent(currentProduct),
        addRatingToRelated(relatedProducts),
      ])
    )
    .then(([styles, style, currentProduct, relatedProducts]) => {
      console.log('styles: ', styles);
      console.log('style: ', style);
      console.log('currentProduct: ', currentProduct);
      console.log('relatedProducts: ', relatedProducts);
      callback(currentProduct, styles, style, relatedProducts);
    });
};

const productChangedEvent = new CustomEvent('productChanged', {
  productId: -1,
});

export default changeCurrentProduct;
