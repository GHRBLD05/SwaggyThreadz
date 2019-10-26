import React from 'react';
import { Fullstar, Emptystar, Halfstar } from "../star_component/StarName.jsx";
import $ from 'jquery';

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
            helpfulness: props.review.helpfulness,
            photos: props.review.photos
        }
        this.maxrating = 5;
    }

    incrementHelpful() {
        var obj = this;
        $.ajax({
            url: "http://52.26.193.201:3000/reviews/helpful/" + `${obj.props.review.review_id}`,
            type: "PUT",
            success: function (res) {
                console.log("Helpful!");
            }
        });
    }

    reportReview() {
        var obj = this;
        $.ajax({
            url: "http://52.26.193.201:3000/reviews/report/" + `${obj.props.review.review_id}`,
            type: "PUT",
            success: function (res) {
            }
        });
    }

    render() {
        var review = this.props.review;
        var stars = [];
        for (let i = 0; i < review.rating; i++) {
            stars.push(<Fullstar key={`star_${i}`} />);
        }
        for (let lastIndex = review.rating; lastIndex < this.maxrating; lastIndex++) {
            stars.push(<Emptystar key={`star_${lastIndex}`} />);
        }
        var photos = [];
        if (review.photos.length > 0) {
            for (var i = 0; i < review.photos.length; i++) {
                photos.push(<img className="reviewphoto" src={review.photos[i].url} />);
            }
        }
        var recommended = null;
        if (review.recommend) {
            recommended = (<div>recommended</div>)
        }
        var date = new Date(review.date);
        return (
            <div id="review">
                <header className="topbar">
                    <div className="review_rating">
                        {stars}
                    </div>
                    <div className="review_userinfo">
                        <div>{reviews.reviewer_name}, {date.toDateString()}</div>
                    </div>
                </header>
                <content>
                    <div className="focus review_title">
                        <div className="overflowhidden ellipsis">{review.summary}</div>
                    </div>
                    {recommended}
                    <p className="review_content">
                        {reviews.body}
                    </p>
                    <div id="reviewphotos">
                        {photos}
                    </div>
                </content>
                <footer className="leftjustify review_feedback">
                    <div>Was this review helpful?: {reviews.helpfulness}</div>
                    <div onClick={() => this.incrementHelpful()} className="leftpadding reviewlinks">Yes</div><div className="leftpadding">|</div><div onClick={() => this.reportReview()} className="leftpadding reviewlinks">Report</div>
                </footer>
            </div>
        )
    }
}
