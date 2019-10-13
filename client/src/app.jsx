import React from 'react';
import QuestionsModule from './Questions_answers/QuestionsModule.jsx';
import ReviewsAndRatings from './reviewcomponent/reviewsandratings.jsx';
import Overview from './overview_components/overview.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className="container-fluid maincontainer">
                <Overview />
                <QuestionsModule />
                <ReviewsAndRatings />
            </div>
        );
    }
}