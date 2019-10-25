import React from "react";
import Reviews from "./reviews.jsx";
import Ratings from "./ratings.jsx";
import $ from 'jquery';

export default class ReviewsAndRatings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productinfo: null
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
                        productinfo: data
                    });
                }
            });
        }
    }

    render() {
        if (this.state.productinfo === null || this.state.productinfo.product != this.props.productid) {
            this.fetchReviews(this.props.productid);
        }
        return (
            <div id="rnr" className="row">
                <div id="rnrTitle" className="col-md-12">Ratings and Reviews</div>
                <Ratings />
                <Reviews productinfo={this.state.productinfo} />
            </div>
        )
    }
}