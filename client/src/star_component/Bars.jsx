import React from "react";
import $ from "jquery";

export default class Bars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {},
      number: 0
    };
  }

  componentDidMount() {
    const id = this.props.productId;
    $.get(`http://52.26.193.201:3000/reviews/${id}/meta`, results => {
    })
      .then(results => {
        this.setState({
          ratings: results
        });
      })
      .then(results => {
        let avgNumber = this.calculateRating(results.ratings);
        this.setState({ number: avgNumber });
      });
  }

  calculateRating(ratings) {
    let sum = 0;
    let average = 0;
    let counter = 0;
    for (key in ratings) {
      sum += ratings[key];
      counter += 1;
    }
    average = sum / counter;
  }

  render() {
    // const style = {height: '2px', width: '6px', backgroundcolor: 'black'} {
    return (
      <React.Fragment>
        <div>100% of reviews recommend this product</div>
        <div className="container">
          <div className="row">
            <div className="5-star">5 stars</div>
            <div className="bar1 mt-2 ml-1"></div>
          </div>
          <div className="row">
            <div>4 stars</div>
            <div className="bar2 mt-2 ml-1"></div>
          </div>
          <div className="row">
            <div>3 stars</div>
            <div className="bar3 mt-2 ml-1"></div>
          </div>
          <div className="row">
            <div>2 stars</div>
            <div className="bar4 mt-2 ml-1"></div>
          </div>
          <div className="row">
            <div>1 stars</div>
            <div className="bar5 mt-2 ml-1"></div>
          </div>
        </div>
        <div>Size</div>
        <div className="row">
          <div className="bar6"></div>
          <div className="bar6"></div>
          <div className="bar6"></div>
          <div className="text">
            Too small&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Perfect
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Too large
          </div>
        </div>
        <div>Comfort</div>
        <div className="row">
          <div className="bar7"></div>
          <div className="bar7"></div>
          <div className="bar7"></div>
          <div className="text">
            Poor&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Perfect
          </div>
        </div>
      </React.Fragment>
    );
  }
}
