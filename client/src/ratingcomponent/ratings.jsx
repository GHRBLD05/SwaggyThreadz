import React from 'react';
import StarLogic from '../star_component/StarLogic.jsx';
import Bars from './bars.jsx';
import ProductBreakdown from './productbreakdown.jsx';

export default class Ratings extends React.Component {
  
    render() {
        var graph = [];
        if (this.props.ratingInfo !== null) {
            for (var i = 1; i < 6; i++) {
                if (this.props.ratingInfo.ratings[i] !== undefined)
                    graph[i - 1] = this.props.ratingInfo.ratings[i];
                else
                    graph[i - 1] = 0;
            }
            var counter = 0;
            var avg = 0;
            for (var i = 0; i < graph.length; i++) {
                if (graph[i] > 0) {
                    counter++;
                }
                avg += graph[i];
            }
            avg = Math.round((avg / counter) * 10) / 10;
        }

        return (
          <div id="ratings" className="col-md-4">
            <h1>Ratings</h1>
            <div className="row">
              <div className="bignumber">{avg}</div>
              <StarLogic starCount={avg} />
            </div>
                <Bars barinfo={graph} />
                <ProductBreakdown />
          </div>
        );
  }
}
