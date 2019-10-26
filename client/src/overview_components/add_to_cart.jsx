import React, { Component } from 'react';

export default class AddToCart extends Component {
  render() {
    const sizes = Object.keys(this.props.currentStyle.skus);
    const qty = Object.values(this.props.currentStyle.skus);

    return (
      <div className="row">
        <div className="col-md-8">
          <select className="button focus">
            {sizes.map((size, i) => (
              <option>{size}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <select>
            {qty.map((size, i) => (
              <option className="button focus">{size}</option>
            ))}
          </select>
        </div>
        <div className="row">
          <div>
            <input className="button focus" type="button" value="Add To Cart" />
          </div>
        </div>
      </div>
    );
  }
}
