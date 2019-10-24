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
        <div>Size</div>
        <div className="row">
          <div className="bar1"></div>
          <div className="bar1"></div>
          <div className="bar1"></div>
          <div className="text">
            Too small&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Perfect
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Too large
          </div>
        </div>
      </React.Fragment>
    );
  }
}
