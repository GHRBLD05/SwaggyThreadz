import React, { Component } from 'react';
import NavBar from './nav_bar.jsx';
import AddToCart from './add_to_cart.jsx';
import ImageGallery from './image_gallery.jsx';
import ProductInfo from './product_info.jsx';
import StyleSelector from './style_selector.jsx';

class overview extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <NavBar />
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-md-8">
              <ImageGallery />
            </div>
            <div className="col-md-4">
              <ProductInfo />
              <StyleSelector />
              <div>
                <AddToCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default overview;
