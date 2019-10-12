import React from "react";
import Reviews from "./reviews.jsx";
import Ratings from "./ratings.jsx";

export default class ReviewsAndRatings extends React.Component {
    render() {
        return (
            <div id="rnr" className="row">
                <Ratings />
                <Reviews />
            </div>
        )
    }
}