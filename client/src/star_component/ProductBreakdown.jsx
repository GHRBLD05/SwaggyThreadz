import React from 'react';
// import redux  ?
import PropTypes from 'prop-types';
import setProductRatingValue from './RatingReviews.js';
import setProductTestlabels from './RatingReviews.js';

const mapStateToProps = state => ({
  ...state,
});

export const ProductBreakdown = ({ getNewData }) => {
  const { characteristics } = getNewData;
  const productLabels = Object.keys(characteristics || []).map(label => {
    const {
      leftTestlabel,
      centerTestlabel,
      rightTestlabel,
    } = setProductTestlabels(label);
    const { leftValue, centerValue, rightValue } = setProductRatingValue(
      characteristics[label].value
    );

    return (
      <li key={label} className="product-breakdown-item">
        {label}
        <div className="pb-details-container">
          <div className="pb-detail">
            <input
              className={`pb-range range ${
                leftValue ? 'range-show' : 'range-hide'
              }`}
              type="range"
              value={leftValue}
              max={1.5}
              disabled
            />
            <p className="pb-bottom-label left">
              <span>{leftTestlabel}</span>
            </p>
          </div>
          <div className="pb-detail">
            <input
              className={`pb-range range ${
                centerValue ? 'range-show' : 'range-hide'
              }`}
              type="range"
              value={centerValue}
              max={1.5}
              disabled
            />
            <p className="pb-bottom-label center">
              <span>{centerTestlabel}</span>
            </p>
          </div>
          <div className="pb-detail">
            <input
              className={`pb-range range ${
                rightValue ? 'range-show' : 'range-hide'
              }`}
              type="range"
              value={rightValue}
              max={5}
              disabled
            />
            <p className="pb-bottom-label right">
              <span>{rightTestlabel}</span>
            </p>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="product-breakdown breakdown-widget">
      <ul className="breakdown-list">{productLabels}</ul>
    </div>
  );
};

ProductBreakdown.propTypes = {
  getNewData: PropTypes.shape({
    product_id: PropTypes.string,
    ratings: PropTypes.object,
    recommended: PropTypes.object,
    characteristics: PropTypes.object,
  }),
};

ProductBreakdown.defaultProps = {
  getNewData: {
    characteristics: {},
  },
};

export default ProductBreakdown;
