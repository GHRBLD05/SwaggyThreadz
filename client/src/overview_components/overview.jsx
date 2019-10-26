import React, { Component } from 'react';
import NavBar from './nav_bar.jsx';
import AddToCart from './add_to_cart.jsx';
import ImageGallery from './image_gallery.jsx';
import ProductInfo from './product_info.jsx';
import StyleSelector from './style_selector.jsx';

class Overview extends Component {
  render() {
    console.log('dem props', this.props);

    const {
      currentProduct,
      currentStyle,
      currentSize,
      stylesArray,
      productList,
      handleSearch,
      handleProductClick,
    } = this.props;
    return (
      <div id="module-overview">
        <div className="row">
          <div className="col-md-12">
            <NavBar
              currentProduct={currentProduct}
              currentStyle={currentStyle}
              stylesArray={stylesArray}
              currentSize={currentSize}
              productList={productList}
              handleSearch={handleSearch}
            />
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-md-8">
              <ImageGallery
                currentProduct={currentProduct}
                currentStyle={currentStyle}
                stylesArray={stylesArray}
                currentSize={currentSize}
              />
            </div>
            <div className="col-md-4">
              <ProductInfo
                currentProduct={currentProduct}
                currentStyle={currentStyle}
                stylesArray={stylesArray}
                currentSize={currentSize}
              />
              <StyleSelector
                currentProduct={currentProduct}
                currentStyle={currentStyle}
                stylesArray={stylesArray}
                currentSize={currentSize}
                handleProductClick={handleProductClick}
              />
              <div>
                <AddToCart
                  currentProduct={currentProduct}
                  currentStyle={currentStyle}
                  stylesArray={stylesArray}
                  currentSize={currentSize}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Overview;
