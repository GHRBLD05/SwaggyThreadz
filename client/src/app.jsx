import React from 'react';
import Overview from './overview_components/overview.jsx';
import RelatedProductsContainer from './containers/relatedProductsContainer.js';
// import QuestionsModule from './Questions_answers/QuestionsModule.jsx';
import ReviewsAndRatings from './reviewcomponent/reviewsandratings.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container maincontainer">
        <Overview />
        <RelatedProductsContainer />
        {/* <QuestionsModule /> */}
        <ReviewsAndRatings />
      </div>
    );
  }
}
