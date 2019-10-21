import React from 'react';

const RelatedProduct = props => (
  <div
    className="img-fluid mx-auto d-block"
    style={{
      backgroundColor: 'eee'
    }}
  >
    {console.log('props', props)}
    <img
      src={props.product.thumbnail_url}
      alt={props.product.name}
      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
    />
  </div>
);

export default RelatedProduct;
