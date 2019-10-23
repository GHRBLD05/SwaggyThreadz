import React from 'react';
import $ from 'jquery';
import Review from './review.jsx';
import Filter from './filter.jsx';
import Controls from './controls.jsx';

export default class Reviews extends React.Component {
  constructor() {
    super();
    this.url = 'http://52.26.193.201:3000/reviews/2/list';
    this.views = ['REDUCED', 'FULL'];
    this.state = {
      viewState: this.views[0],
      reviews: {
        product: undefined,
        page: undefined,
        count: undefined,
        results: undefined,
      },
    };
  }

  componentDidMount() {
    document
      .getElementById('reviews')
      .addEventListener('sortingChanged', e =>
        this.getReviews(e.detail.sortOptions)
      );

    this.getReviews('relevance');
  }

  getReviews(sortOptions) {
    const obj = this;
    $.ajax({
      url: `${obj.url}?sort=${sortOptions}`,
      type: 'GET',
      dataType: 'json',
      success(res) {
        obj.setState({ reviews: res });
      },
    });
  }

  render() {
    if (this.state.reviews.product === undefined) {
      return (
        <div id="reviews" className="col-md-8 row-">
          {<Filter />}
          {<Controls />}
        </div>
      );
    }
    if (this.state.viewState === this.views[0]) {
      return (
        <div id="reviews" className="col-md-8 row-">
          {<Filter />}
          {this.state.reviews.results.map(review => (
            <Review key={review.review_id} review={review} />
          ))}
          {<Controls />}
        </div>
      );
    }
    if (this.state.viewState === this.views[1]) {
      return (
        <div id="reviews" className="col-md-8 row-">
          {<Filter />}
          {this.state.reviews.results.map(review => (
            <Review review={review} />
          ))}
          {<Controls />}
        </div>
      );
    }
  }
}
