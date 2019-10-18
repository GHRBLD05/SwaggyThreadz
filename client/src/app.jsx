import React from "react";
import Overview from "./overview_components/overview.jsx";
import RelatedProductsContainer from "./containers/relatedProductsContainer.js";
import QuestionsContainer from "./containers/QuestionsContainer.jsx";
import ReviewsAndRatings from "./reviewcomponent/reviewsandratings.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProduct: 4
        }


    }
  render() {
    return (
      <div className="container">
        <Overview />
        <RelatedProductsContainer />
        <QuestionsContainer />
        <ReviewsAndRatings productid={this.state.currentProduct}/>
      </div>
    );
  }
}
