import React from 'react';

export default class Controls extends React.Component {
    constructor(props) {
        super(props);


        this.loadMoreReviews = new CustomEvent("loadMoreReviews", null)
    }

    onLoadMoreReviews(e) {
        document.getElementById('reviews').dispatchEvent(this.loadMoreReviews);
    }

    render() {
      return  (
          <div id="controls">
              <button id="morereviewsbutton" type="button" onClick={this.onLoadMoreReviews.bind(this)}>MORE REVIEWS</button>
              <button id="addreviewbutton" type="button">ADD A REVIEW</button>
          </div>
        )
    }
}