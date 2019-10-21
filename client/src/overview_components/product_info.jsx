import React from 'react';
import StarRating from '../star_component/StarRating.jsx';
import Emptystar from '../star_component/Emptystar.jsx';
import Halfstar from '../star_component/Halfstar.jsx';

const ProductInfo = props => (
  <div className="productInfo">
    <StarRating />
    <Halfstar />
    <Emptystar />
    <p>
      star rating, category, title, price w strikethru if sale, sku dependent,
      product overview, social media share
    </p>
    {/* <p>{props.currentProduct.category}</p>
    <h4>{props.currentProduct.name}</h4>
    <p>{`$${props.currentProduct.default_price}`}</p> */}
    <p>STYLE > selected style</p>
  </div>
);

export default ProductInfo;
