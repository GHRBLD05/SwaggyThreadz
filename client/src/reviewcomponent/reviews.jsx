import React from "react";
import Review from "./review.jsx";
import Filter from "./filter.jsx";
import Controls from "./controls.jsx";
import $ from 'jquery';

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.url = `http://52.26.193.201:3000/reviews/${props.productinfo.productid}/list`; //TODO: Add params to load different items
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

    render() {
        if (this.state.reviews.product === undefined || this.state.reviews.results.length === 0) /* INIT */ {
            return (
                <div id="reviews" className="col-md-8 row-">
                    {<Filter />}
                    {<Controls reviewsState={this.state.viewState}/>}
                </div>
            )
        }
        else if (this.state.viewState === this.views[0]) /* REDUCED */ {

            var reviews = [];
            let i = 0
            for (; i < this.state.viewCount && i < this.state.reviews.count; i++) {
                reviews.push(<Review key={this.state.reviews.results[i].review_id} review={this.state.reviews.results[i]} />);
            }

            return (
                <div id="reviews" className="col-md-8 row-">
                    {<Filter />}
                    <div id="reviewlist">
                        {reviews}
                    </div>
                    {<Controls reviewsState={this.state.viewState}/>}
                </div>
            )
        }
        else if (this.state.viewState === this.views[1]) /* FULL */ {

            return (
                <div id="reviews" className="col-md-8 row-">
                    {<Filter />}
                    <div id="reviewlist">
                        {this.state.reviews.results.map((review) => <Review key={review.review_id} review={review} />)}
                    </div>
                    {<Controls reveiwsState={this.state.viewState}/>}
                </div>
            )
        }
    }
}