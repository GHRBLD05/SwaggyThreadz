import React from 'react';
import $ from 'jquery';

const RelatedProduct = props => (
  <div
    className="img-fluid mx-auto d-block"
    style={{
      backgroundColor: 'eee',
    }}
  >
    <img
      src={props.product.thumbnail_url}
      alt={props.product.name}
      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
    />
  </div>
);

export default RelatedProduct;
