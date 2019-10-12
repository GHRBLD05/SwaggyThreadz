import React from "react";
import Review from "./review.jsx";
import Filter from "./filter.jsx";
import Controls from "./controls.jsx";

export default class Reviews extends React.Component {
    render() {
        return (
            <div id="reviews" className="col-md-8 row-">
                <h1>reviews</h1>
                {<Filter />}
                {<Review />}
                {<Review />}
                {<Controls />}
            </div>
		)
    }
}