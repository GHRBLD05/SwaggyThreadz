import React from "react";

class ProductBreakdown extends React.Component {
  render() {
    console.log(this.props.metaData);
    return (
      <div>
        <div>{this.props.averageRating}</div>
        <div>{this.props.metaData.characteristics.Quality.value}</div>
      </div>
    );
  }
}

export default ProductBreakdown;
