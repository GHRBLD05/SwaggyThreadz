import React from "react";
import OverviewContainer from './containers/overviewContainer.js';
import RelatedProductsContainer from "./containers/relatedProductsContainer.js";
import QuestionsContainer from "./containers/QuestionsContainer.jsx";
import ReviewsAndRatings from "./reviewcomponent/reviewsandratings.jsx";
import fs from "fs";

export default class App extends React.Component {
  constructor(props) {
      super(props);
  
      document.getElementById('app').addEventListener('click', e => console.log(e));
  }

    logEvent(e) {

        $.ajax({
            url: "http://52.26.193.201:3000/reviews/report/" + `${this.state.review_id}`,
            type: "PUT",
            success: function (res) {
            }
        });
    }


  render() {
    return (
      <div className="container maincontainer">
        <OverviewContainer />
        <RelatedProductsContainer />
        <QuestionsContainer />
        <ReviewsAndRatings />
      </div>
    );
  }
}
