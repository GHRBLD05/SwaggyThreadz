import React from "react";
import Review from "./review.jsx";
import Filter from "./filter.jsx";
import Controls from "./controls.jsx";
import $ from 'jquery';

export default class Reviews extends React.Component {
    constructor() {
        super();

        this.url = "http://52.26.193.201:3000/reviews/2/list"; //TODO: Add params to load different items
        this.views = ["REDUCED", "FULL"];
        this.state = {
            viewCount: 2,
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
        this.getReviews('relevance');

        document.getElementById('reviews').addEventListener('sortingChanged', e => this.getReviews(e.detail.sortOptions));
        document.getElementById('reviews').addEventListener('loadMoreReviews', e => {
            this.setState({ viewCount: this.state.viewCount += 2 });
            this.state.viewCount >= this.state.reviews.results.length ? this.setState({ viewState: this.views[1] }) : this.setState();
        });
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
        if (this.state.reviews.product === undefined) /* INIT */ {
            return (
                <div id="reviews" className="col-md-8 row-">
                    {<Filter />}
                    {<Controls reviewsState={this.state.viewState}/>}
                </div>
            )
        }
        else if (this.state.viewState === this.views[0]) /* REDUCED */ {
            console.log("STATE:", this.state.viewState);

            var reviews = [];
            let i = 0
            for (; i < this.state.viewCount && i < this.state.reviews.count; i++) {
                reviews.push(<Review key={this.state.reviews.results[i].review_id} review={this.state.reviews.results[i]} />);
            }

            return (
                <div id="reviews" className="col-md-8 row-">
                    {<Filter />}
                    {reviews}
                    {<Controls reviewsState={this.state.viewState}/>}
                </div>
            )
        }
        else if (this.state.viewState === this.views[1]) /* FULL */ {
            console.log("STATE:", this.state.viewState);

            return (
                <div id="reviews" className="col-md-8 row-">
                    {<Filter />}
                    {this.state.reviews.results.map((review) => <Review key={review.review_id} review={review} />)}
                    {<Controls reveiwsState={this.state.viewState}/>}
                </div>
            )
        }
    }
}