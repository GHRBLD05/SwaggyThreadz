import $ from 'jquery';

const handleSearch = (productName, cb) => {
  $.get('http://52.26.193.201:3000/products/list?count=10050', productList => {
    // eslint-disable-next-line no-shadow
    let productID;
    // eslint-disable-next-line prefer-const
    for (const elem of productList) {
      if (elem.name === productName) {
        productID = elem.id;
        break;
      }
    }
    $.get(`http://52.26.193.201:3000/products/${productID}`, product => {
      $.get(
        `http://52.26.193.201:3000/products/${productID}/styles`,
        styles => {
          const stylesArray = styles.results;
          let currentStyle;
          for (const style of stylesArray) {
            if (style['default?'] === 1) {
              currentStyle = style;
              break;
            }
          }
          cb(product, stylesArray, currentStyle);
        }
      );
    });
  });
};

export default handleSearch;
