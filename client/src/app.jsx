import React from 'react';
import OverviewContainer from './containers/overviewContainer.js';
import RelatedProductsContainer from './containers/relatedProductsContainer.js';
import QuestionsContainer from './containers/QuestionsContainer.jsx';
import ReviewsAndRatings from './reviewcomponent/reviewsandratings.jsx';
import Outfit from './relatedAndOutfit/outfit.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container maincontainer">
        <OverviewContainer />
        <RelatedProductsContainer />
        <Outfit />
        <QuestionsContainer />
        <ReviewsAndRatings />
      </div>
    );
  }
}
