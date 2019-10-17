import React from 'react';
import RelatedProduct from './relatedProduct.jsx';

const Related = props => (
  <div>
    {/* {props.relatedProducts.map((product, i) => (
      <RelatedProduct product={product} key={i} />
    ))} */}
    <h3>{JSON.stringify(props)}</h3>
  </div>
);

export default Related;
