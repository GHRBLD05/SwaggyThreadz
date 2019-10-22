import React from 'react';
import RelatedModal from './relatedModal.jsx';

const RelatedProduct = props => (
  <div
    onClick={e => {
      props.handleProductClick(props.product.name);
    }}
    onKeyPress={e => {
      props.handleProductClick(props.product.name);
    }}
    tabIndex={0}
    role="button"
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
    <button
      type="button"
      className="relatedModalButton fa fa-star fa-lg"
      data-toggle="modal"
      data-target={`#relatedModal${props.product.id}`}
      onClick={e => {
        e.stopPropagation();
      }}
    ></button>
    <RelatedModal
      relatedProduct={props.product}
      currentProduct={props.currentProduct}
    />
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
