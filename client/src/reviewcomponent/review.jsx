import React from 'react';
import Star from '../star_component/Star.jsx';
import EmptyStar from '../star_component/Emptystar.jsx';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review_id: props.review.review_id,
            rating: props.review.rating,
            summary: props.review.summary,
            recommend: props.review.recommend,
            response: props.review.response,
            body: props.review.body,
            date: props.review.date,
            reviewer_name: props.review.reviewer_name,
            helpfulnes: props.review.helpfulnes,
            photos: props.review.photos
        }
        this.maxrating = 5;
    }

    render() {
        let lastIndex = 0;
        var stars = [];
        for (let i = 0; i < this.state.rating; i++) {
            stars.push(<Star key={`star_${i}`} />);
        }
        lastIndex = this.state.rating;
        for (; lastIndex < this.maxrating; lastIndex++) {
            stars.push(<EmptyStar key={`star_${lastIndex}`} />);
        }
        
        return (
            <div id="review">
                <header className="topbar">
                    <div className="review_rating">
                        {stars}
                    </div>
                    <div className="review_userinfo">
                        <div>{this.state.reviewer_name}, January, 1, 2020</div>
                    </div>
                </header>
                <content>
                    <div className="focus review_title">
                        <div className="overflowhidden ellipsis">{this.state.summary}</div>
                    </div>
                    <p className="review_content">
                        {this.state.body}
                    </p>
                </content>
                <footer className="leftjustify review_feedback">
                    <div>Was this review helpful?</div>
                    <div onClick={() => console.log('Helpful!')} className="leftpadding reviewlinks">Yes</div><div className="leftpadding">|</div><div onClick={() => console.log('Reported!')} className="leftpadding reviewlinks">Report</div>
                </footer>
            </div>
        )
    }
}