import React from "react";
import Reviews from "./reviews.jsx";
import Ratings from "../ratingcomponent/ratings.jsx";
import $ from 'jquery';

export default class ReviewsAndRatings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reviewInfo: null,
            ratingInfo: null
        }
    }
    fetchReviews(productId) {
        if (productId !== -1) {
            var obj = this;
            $.ajax({
                type: 'GET',
                url: `http://52.26.193.201:3000/reviews/${productId}/list`,
                success: function (data) {
                    obj.setState({
                        reviewInfo: data
                    });
                }
            });
        }
    }
    fetchRatings(productId) {
        if (productId !== -1) {
            var obj = this;
            $.ajax({
                type: 'GET',
                url: `http://52.26.193.201:3000/reviews/${productId}/meta`,
                success: function (data) {
                    obj.setState({
                        ratingInfo: data
                    });
                }
            });
        }
    }

    render() {
        if (this.state.reviewInfo === null || this.state.reviewInfo.product != this.props.productid) {
            this.fetchReviews(this.props.productid);
            this.fetchRatings(this.props.productid);
        }
        return (
            <div id="rnr" className="row">
                <div id="rnrTitle" className="col-md-12">Ratings and Reviews</div>
                <Ratings ratingInfo={this.state.ratingInfo}/>
                <Reviews productinfo={this.state.reviewInfo} />
            </div>
        )
    }
}