import React from 'react';
import OverviewContainer from './containers/overviewContainer.js';
import RelatedProductsContainer from './containers/relatedProductsContainer.js';
// import QuestionsModule from './Questions_answers/QuestionsModule.jsx';
// import ReviewsAndRatings from './reviewcomponent/reviewsandratings.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container maincontainer">
        <OverviewContainer />
        <RelatedProductsContainer />
        {/* <QuestionsModule /> */}
        {/* <ReviewsAndRatings /> */}
      </div>
    );
  }
}
