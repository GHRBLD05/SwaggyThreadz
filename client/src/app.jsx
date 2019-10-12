import React from "react";
import QuestionsModule from "./Questions_answers/QuestionsModule.jsx";
import ReviewsAndRatings from './reviewcomponent/reviewsandratings.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>test</h1>
                <QuestionsModule />
                <ReviewsAndRatings />
            </div>
        );
    }
}