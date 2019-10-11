import React, { Component } from 'react';
import AddToCart from './add_to_cart.jsx';
import ImageGallery from './image_gallery.jsx';
import ProductInfo from './product_info.jsx';
import StyleSelector from './style_selector.jsx';

class overview extends Component {
  render() {
    return (
      <div>
        <ImageGallery />
        <ProductInfo />
        <StyleSelector />
        <div>
          <AddToCart />
        </div>
      </div>
    );
  }
}

export default overview;
