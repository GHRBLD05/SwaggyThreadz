import React from 'react';
import $ from 'jquery';
import OverviewContainer from './containers/overviewContainer.js';
import RelatedProductsContainer from './containers/relatedProductsContainer.js';
import OutfitContainer from './containers/outfitContainer.js';
import QuestionsContainer from './containers/QuestionsContainer.jsx';
import ReviewsAndRatings from './reviewcomponent/reviewsandratings.jsx';
import Outfit from './relatedAndOutfit/outfit.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProduct: 5
        }
    }

    componentDidMount() {
        document.getElementById('app').addEventListener('click', e => this.logClickEvent(e));
        document.getElementById('app').addEventListener('productChanged', e => this.setState({ currentProduct: e.productId }));
    }

    render() {
        return (
          <div className="container maincontainer">
            <OverviewContainer />
            <RelatedProductsContainer />
            <OutfitContainer />
            <QuestionsContainer />
            <ReviewsAndRatings productid={this.state.currentProduct}/>
          </div>
        );
    }

    // HELPERS
    logClickEvent(e) {
        const obj = {};
        for (let i = 0; i < e.path.length; i++) {
            if (e.path[i].id !== undefined && e.path[i].id.startsWith('module')) {
                obj[e.path[i].id] = e.target.className;
            }
        }
        $.ajax({
            url: 'http://127.0.0.1:3000/telemetry',
            type: 'PUT',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(obj),
            success(res) {
                console.log(`Click Info Logged: ${obj}`);
            },
        });
    }
}
