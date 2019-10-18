import React from "react";
import Reviews from "./reviews.jsx";
import Ratings from "./ratings.jsx";

export default class ReviewsAndRatings extends React.Component {
    render() {
        return (
            <div id="rnr" className="row">
                <div id="rnrTitle" className="col-md-12">Ratings and Reviews</div>
                <Ratings />
                <Reviews productinfo={this.props}/>
            </div>
        )
    }
}