import React from "react";
import Review from "./review.jsx";
import Filter from "./filter.jsx";
import Controls from "./controls.jsx";
import $ from 'jquery';

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);
        console.log(";lkj;lk");
        console.log(props);
        this.url = `http://52.26.193.201:3000/reviews/${this.props.productinfo.product}/list`; //TODO: Add params to load different items
        this.views = ["REDUCED", "FULL"];
        this.state = {
            viewCount: 2,
            viewState: this.views[0]
        }

        this.allReviewsLoaded = new CustomEvent('allReviewsLoaded', { detail: { reviewsState: this.views[1] } });
    }

    componentDidMount() {
        this.getReviews('relevance');

        document.getElementById('reviews').addEventListener('sortingChanged', e => this.getReviews(e.detail.sortOptions));
        document.getElementById('reviews').addEventListener('loadMoreReviews', e => {
            this.setState({ viewCount: this.state.viewCount += 2 });
            if (this.state.viewCount >= this.state.reviews.results.length) {
                this.setState({ viewState: this.views[1] });
                document.getElementById('controls').dispatchEvent(this.allReviewsLoaded, null);
            }
        });
    }

    render() {
        console.log("REVIEWS:");
        console.log(this.url);
        if (this.props.productinfo === null) /* INIT */ {
            console.log('Reviews: INIT');
            return (
                <div id="reviews" className="col-md-8 row-">
                    {<Filter />}
                    {<Controls reviewsState={this.state.viewState} />}
                </div>
            )
        }
        else if (this.state.viewState === this.views[0]) /* REDUCED */ {
            console.log('Reviews: REDUCED');
            var reviews = [];
            for (let i = 0; i < this.state.viewCount && i < this.props.productinfo.results.length; i++) {
                reviews.push(<Review key={this.props.productinfo.results[i].review_id} review={this.props.productinfo.results[i]} />);
            }

            return (
                <div id="reviews" className="col-md-8 row-">
                    {<Filter />}
                    <div id="reviewlist">
                        {reviews}
                    </div>
                    {<Controls reviewsState={this.state.viewState} />}
                </div>
            )
        }
        else if (this.state.viewState === this.views[1]) /* FULL */ {
            console.log('Reviews: FULL');
            return (
                <div id="reviews" className="col-md-8 row-">
                    {<Filter />}
                    <div id="reviewlist">
                        {this.props.productinfo.results.map((review) => <Review key={review.review_id} review={review} />)}
                    </div>
                    {<Controls reveiwsState={this.state.viewState} />}
                </div>
            )
        }
    }

    getReviews(sortOptions) {
        let obj = this;
        $.ajax({
            url: obj.url + `?sort=${sortOptions}`,
            type: "GET",
            dataType: "json",
            success: function (res) {
                obj.setState({ reviews: res });
            }
        });

    }
}