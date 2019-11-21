import React from 'react';

class ProductInfo extends React.Component {
  render() {

    return (
      <div className="productInfo">
        <p>{this.props.currentProduct.category}</p>
        <h4>{this.props.currentProduct.name}</h4>
        <p>{`$${this.props.currentProduct.default_price}`}</p>
        <p>STYLE > {this.props.currentStyle.name}</p>
      </div>
    );
  }
}

export default ProductInfo;
