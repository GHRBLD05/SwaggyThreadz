import React, { Component } from 'react';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: '',
    };
  }

  handleSizeClick(e) {
    this.setState({ selectedSize: e.target.value });
  }


  render() {

    const sizes = Object.keys(this.props.currentStyle.skus);
    const qty = Object.values(this.props.currentStyle.skus);

    return (
      <div className="row">
        <div className="col-md-8">
          <select
            className="select-css"
            onChange={e => this.setState({ selectedSize: e.target.value })}
          >
            <option disabled selected value>
              Size
            </option>

            {sizes.map((size, i) => (
              <option>{size}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">

          <select className="select-css">
            <option disabled selected value>
              Quantity
            </option>
            {Array.from(
              Array(
                this.props.currentStyle.skus[this.state.selectedSize]
              ).keys()
            ).map(i => (
              <option>{i + 1}</option>
            ))}
          </select>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input
              id="addToCart"
              className="button focus"
              type="button"
              value="Add To Cart"
            />
          </div>
        </div>
      </div>
    );
  }
}
