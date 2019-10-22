<<<<<<< HEAD
import React from 'react';
import StarRating from '../star_component/StarRating.jsx';
=======
import React from "react";
import StarRating from "../star_component/StarRating.jsx";
>>>>>>> 75364cac6dae3806e788a115a1e1b2d5ea89be1e
// import Emptystar from '../star_component/Emptystar.jsx';
// import Halfstar from '../star_component/Halfstar.jsx';

const ProductInfo = props => (
  <div className="productInfo">
<<<<<<< HEAD
    {/* <StarRating /> */}
=======
    <StarRating />
>>>>>>> 75364cac6dae3806e788a115a1e1b2d5ea89be1e
    {/* <Halfstar />
    <Emptystar /> */}
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
