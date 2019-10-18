import React from 'react';

export default class Controls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            controlsState: this.props.reviewsState
        }

        this.loadMoreReviews = new CustomEvent("loadMoreReviews", null);
    }

    componentDidMount() {
        document.getElementById('controls').addEventListener('allReviewsLoaded', e => this.setState({ controlsState: e.detail.reviewsState }));
    }

    onLoadMoreReviews(e) {
        document.getElementById('reviews').dispatchEvent(this.loadMoreReviews);
    }

    render() {
        if (this.state.controlsState === "FULL") {
            return (
                <div id="controls">
                    <button id="addreviewbutton" className="focus button" type="button">ADD A REVIEW</button>
                </div>
            )
        }
        else {
            return (
                <div id="controls">
                    <button id="morereviewsbutton" className="focus button" type="button" onClick={this.onLoadMoreReviews.bind(this)}>MORE REVIEWS</button>
                    <button id="addreviewbutton" className="leftmargin focus button" type="button">ADD A REVIEW</button>
                </div>
            )
        }
    }
}