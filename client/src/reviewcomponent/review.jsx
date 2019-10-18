import React from 'react';
import Star from '../star_component/Star.jsx';
import EmptyStar from '../star_component/Emptystar.jsx';
import $ from 'jquery';

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
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
        $.ajax({
            url: "http://52.26.193.201:3000/reviews/helpful/" + `${this.state.review_id}`,
            type: "PUT",
            success: function (res) {
            }
        });
    }

    reportReview() {
        $.ajax({
            url: "http://52.26.193.201:3000/reviews/report/" + `${this.state.review_id}`,
            type: "PUT",
            success: function (res) {
            }
        });
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
        var photos = [];
        if (this.state.photos.length > 0) {
            for (var i = 0; i < this.state.photos.length; i++) {
                photos.push(<img class="reviewphoto" src={this.state.photos[i].url} />);
            }
        }
        var recommended = null;
        if (this.state.recommend) {
            recommended = (<div>recommended</div>)
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
                    {recommended}
                    <p className="review_content">
                        {this.state.body}
                    </p>
                    <div id="reviewphotos">
                        {photos}
                    </div>
                </content>
                <footer className="leftjustify review_feedback">
                    <div>Was this review helpful?: {this.state.helpfulness}</div>
                    <div onClick={() =>this.incrementHelpful()} className="leftpadding reviewlinks">Yes</div><div className="leftpadding">|</div><div onClick={() => this.reportReview()} className="leftpadding reviewlinks">Report</div>
                </footer>
            </div>
        )
    }
}