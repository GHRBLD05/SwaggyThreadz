import React from 'react';

export default class OutfitCard extends React.Component {
  render() {
    return (
      <div>
        <div className="img-fluid mx-auto d-block relatedCard">
          <img
            src={this.props.product.thumbnail_url}
            alt={this.props.product.name}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <button
            type="button"
            className="relatedModalButton fa fa-star fa-lg"
          ></button>
          <div className="relatedCardProductInfo">
            <p className="relatedProductCategory">
              {this.props.product.category}
            </p>
            <p className="relatedProductName">{this.props.product.name}</p>
            <p className="relatedProductPrice">
              ${this.props.product.default_price}
            </p>
            <p className="relatedProductRating">
              {this.props.product.averageRating
                ? `${this.props.product.averageRating} / 5`
                : 'No Ratings'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
