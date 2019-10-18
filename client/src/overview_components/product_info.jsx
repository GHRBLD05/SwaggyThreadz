import React from 'react';
import Star from '../star_component/Star.jsx';
import Emptystar from '../star_component/Emptystar.jsx';
import Halfstar from '../star_component/Halfstar.jsx';

const ProductInfo = props => (
  <div>
    <Star />
    <Halfstar />
    <Emptystar />
    <p>
      star rating, category, title, price w strikethru if sale, sku dependent,
      product overview, social media share
    </p>
    <p>
      <strong>{props.currentProduct.category}</strong>
    </p>
    <p>
      <h4>{props.currentProduct.name}</h4>
    </p>
    <p>{`$${props.currentProduct.default_price}`}</p>
  </div>
);

export default ProductInfo;
