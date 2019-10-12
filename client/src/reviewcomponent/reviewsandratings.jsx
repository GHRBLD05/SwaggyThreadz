import React from "react";
import Reviews from "./reviews.jsx";

export default class ReviewsAndRatings extends React.Component {
    render() {
        return (
            <div id="rnr" className="row">
                <h1 className="col-md-4">Ratings</h1>
                {<Reviews />}
            </div>
        )
    }
}