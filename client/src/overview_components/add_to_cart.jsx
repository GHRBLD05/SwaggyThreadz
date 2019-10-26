import React, { Component } from "react";

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: ""
    };
  }

  handleSizeClick(e) {
    this.setState({ selectedSize: e.target.value });
    console.log(this.state.selectedSize);
  }

  render() {
    console.log("mydata");
    console.log(this.state.selectedSize);
    console.log(this.props.currentStyle.skus);
    console.log(this.props.currentStyle.skus[this.state.selectedSize]);
    const sizes = Object.keys(this.props.currentStyle.skus);
    console.log(this.props.currentStyle.skus);

    const qty = Object.values(this.props.currentStyle.skus);
    return (
      <div className="row">
        <div className="col-md-8">
          <select
            className="button focus"
            onChange={e => this.setState({ selectedSize: e.target.value })}
          >
            {sizes.map((size, i) => (
              <option>{size}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <select>
            {Array.from(
              Array(
                this.props.currentStyle.skus[this.state.selectedSize]
              ).keys()
            ).map(i => (
              <option className="button focus" type="number" min="1">
                {i + 1}
              </option>
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
