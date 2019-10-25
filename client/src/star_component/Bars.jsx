import React from 'react';

export default class Bars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('barshow');
    // const style = {height: '2px', width: '6px', backgroundcolor: 'black'} {
    return (
      <React.Fragment>
        <div>100% of reviews recommend this product</div>
        <div>5 stars</div>
        <div className="row1">
          <div className="bar1"></div>
        </div>
        <div>4 stars</div>
        <div className="row2">
          <div className="bar2"></div>
        </div>
        <div>3 stars</div>
        <div className="row3"></div>
        <div className="bar3"></div>
        <div>2 stars</div>
        <div className="row4"></div>
        <div className="bar4"></div>
        <div>1 stars</div>
        <div className="row5"></div>
        <div className="bar5"></div>
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
