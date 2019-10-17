import React from 'react';
import $ from 'jquery';

const RelatedProduct = props => (
  <div className="img-fluid mx-auto d-block">
    <img src={props.product.thumbnail_url} alt={props.product.name} />
  </div>
);

export default RelatedProduct;
