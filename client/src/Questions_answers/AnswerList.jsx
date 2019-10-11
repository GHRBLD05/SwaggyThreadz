import React from 'react';
import Answer from './Answer.jsx';

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
  }

  render() {
    return (
      <div>
        <div className="row answer">
          <p>A: answer will show up here</p>
        </div>
        <div className="row">
          <p>
            by USER_NAME, DATE | Helpful? <a>Yes</a> | <a>Report</a>
          </p>
        </div>
      </div>
    );
  }
}

export default AnswerList;
