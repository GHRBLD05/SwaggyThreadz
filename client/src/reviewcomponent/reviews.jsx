import React from "react";
import Review from "./review.jsx";
import Filter from "./filter.jsx";
import Controls from "./controls.jsx";
import $ from 'jquery';

export default class Reviews extends React.Component {
    constructor() {
        super();

        this.url = "http://52.26.193.201:3000/reviews/2/list"
        this.views = ["REDUCED", "FULL"];
        this.state = {
            viewState: this.views[0],
            reviews: {
                product: undefined,
                page: undefined,
                count: undefined,
                results: undefined
            }
        }
    }

    componentDidMount() {
        document.getElementById('reviews').addEventListener('sortingChanged', e => this.getReviews(e.detail.sortOptions));

        this.getReviews('relevance');
    }

    getReviews(sortOptions) {
        var obj = this;
        $.ajax({
            url: obj.url + `?sort=${sortOptions}`,
            type: "GET",
            dataType: "json",
            success: function (res) {
                obj.setState({ reviews: res });
            }
        });
    }

    render() {
        if (this.state.reviews.product === undefined) {
            return (
                <div id="reviews" className="col-md-8 row-">
                    {<Filter />}
                    {<Controls />}
                </div>
            )
        }
        else if (this.state.viewState === this.views[0]) {
            console.log("STATE:", this.state.viewState);
            return (
                <div id="reviews" className="col-md-8 row-">
                    {<Filter />}
                    {this.state.reviews.results.map((review) => <Review key={review.review_id} review={review} />)}
                    {<Controls />}
                </div>
            )
        }
        else if (this.state.viewState === this.views[1]) {
            console.log("STATE:", this.state.viewState);
            return (
                <div id="reviews" className="col-md-8 row-">
                    {<Filter />}
                    {this.state.reviews.results.map((review) => <Review review={review} />)}
                    {<Controls />}
                </div>
            )
        }
    }
}