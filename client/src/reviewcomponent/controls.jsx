import React from 'react';
import ReactDOM from 'react-dom';
import ModalReview from './modalreview.jsx';

export default class Controls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
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
        var modal = null;
        if (this.state.showModal) {
            modal = ReactDOM.createPortal(<ModalReview />, document.getElementById('modal'));
        }

        if (this.state.controlsState === "REDUCED") {
            return (
                <div id="controls">
                    {modal}
                    <button id="morereviewsbutton" className="focus button" type="button" onClick={this.onLoadMoreReviews.bind(this)}>MORE REVIEWS</button>
                    <button id="addreviewbutton" className="leftmargin focus button" type="button" onClick={() => this.setState({ showModal: true })}>ADD A REVIEW</button>
                </div>
            )
        }
        else {
            return (
                <div id="controls">
                    {modal}
                    <button id="addreviewbutton" className="focus button" type="button" onClick={() => this.setState({ showModal: true })}>ADD A REVIEW</button>
                </div>
            )
        }
    }
}