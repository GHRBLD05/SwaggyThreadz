import React from 'react';

class ProductInfo extends React.Component {
  render() {
    console.log('current product', this.props.currentProduct);

    // const stylesArray = this.props.stylesArray
    // const defaultPrice = this.props.currentProduct.default_price
    // let origPrice = []
    // let salePrice = []
    // stylesArray.forEach(style => {
    //   if(style.sale_price > 0) {
    //     salePrice.push(<p style={{text-decoration: 'line-through'}}>{`$${this.props.currentProduct.default_price}`}</p>
    //     <p>{`$${style.sale_price}`}</p>)
    //   } else {
    //     origPrice.push(<p>{`$${this.props.currentProduct.default_price}`}</p>)
    //   }

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
