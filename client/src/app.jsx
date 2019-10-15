import React from 'react';
import Overview from './overview_components/overview.jsx';
import RelatedOutfitContainer from './relatedAndOutfit/relatedAndOutfitContainer.jsx';
import QuestionsModule from './Questions_answers/QuestionsModule.jsx';
import ReviewsAndRatings from './reviewcomponent/reviewsandratings.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid maincontainer">
        <Overview />
        <RelatedOutfitContainer />
        <QuestionsModule />
        <ReviewsAndRatings />
      </div>
    );
  }
}
