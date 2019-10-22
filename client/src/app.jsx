import React from 'react';
import OverviewContainer from './containers/overviewContainer.js';
import RelatedProductsContainer from './containers/relatedProductsContainer.js';
import QuestionsContainer from './containers/QuestionsContainer.jsx';
import ReviewsAndRatings from './reviewcomponent/reviewsandratings.jsx';
import $ from 'jquery';

export default class App extends React.Component {
  constructor(props) {
      super(props);
  
      document.getElementById('app').addEventListener('click', e => this.logClickEvent(e));
  }

    logClickEvent(e) {
        var obj = {};
        for (var i = 0; i < e.path.length; i++) {
            if (e.path[i].id !== undefined && e.path[i].id.startsWith("module")) {
                obj[e.path[i].id] = e.target.className;
            }
        }
        $.ajax({
            url: "http://127.0.0.1:3000/telemetry",
            type: "PUT",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(obj),
            success: function (res) { 
                console.log(`Click Info Logged: ${obj}`);
            }
        });
    }

  render() {
    return (
      <div className="container maincontainer">
        <OverviewContainer />
        <RelatedProductsContainer />
        <QuestionsContainer />
        <ReviewsAndRatings />
      </div>
    );
  }
}
