import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row answer-row">
          <p></p>
        </div>
        <div className="row answer-info">
          <p>By </p>
        </div>
      </div>
    );
  }
}

export default Answer;
