import React from 'react';
import $ from 'jquery';
import StarLogic from '../star_component/StarLogic.jsx';
import Bars from '../star_component/Bars.jsx';

export default class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avg: 0,
    };
    this.getProductData(props.productId);
  }

  getProductData(id) {
    // store in state
    new Promise((resolve, reject) => {
      $.get(`http://52.26.193.201:3000/reviews/${id}/meta`, data => {
        if (data === undefined) {
          resolve(null);
        } else {
          let avg = 0;
          const keys = Object.keys(data.ratings);
          for (let i = 0; i < keys.length; i++) {
            avg += data.ratings[keys[i]];
          }
          avg /= keys.length;
          this.setState({
            avg,
          });
          resolve(avg);
        }
      });
    });
  }

  render() {
    // console.log(ConnectedProductBreakdown);
    return (
      <div id="ratings" className="col-md-4">
        <h1>Ratings</h1>
        <div className="row">
          <div className="bignumber">{this.state.avg}</div>
          <StarLogic starCount={this.state.avg} />
        </div>
        <Bars productId={this.props.productId} />
      </div>
    );
  }
}
