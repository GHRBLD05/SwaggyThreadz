import React from 'react';

const RelatedProduct = props => (
  <div
    className="img-fluid mx-auto d-block"
    style={{
      position: 'relative',
      width: '100%',
      height: '300px',
      border: 'red solid 2px',
    }}
  >
    <img
      src={props.product.thumbnail_url}
      alt={props.product.name}
      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
    />
    <i className="relatedModalButton fa fa-star"></i>
    {console.log('related product: ', props.product)}
    <div className="relatedCardProductInfo">
      <p className="relatedProductCategory">{props.product.category}</p>
      <p className="relatedProductName">{props.product.name}</p>
      <p className="relatedProductPrice">${props.product.default_price}</p>
      <p className="relatedProductRating">
        {props.product.averageRating
          ? `${props.product.averageRating} / 5`
          : 'No Ratings'}
      </p>
    </div>
  </div>
);

export default RelatedProduct;
