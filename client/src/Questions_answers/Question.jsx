import React from 'react';
import AnswerList from './AnswerList.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row question">
          <div className="col-2">
            <p>Q: Question will be here</p>
          </div>
        </div>
        <div className="col-10 helpful">
          <p>Helpful?</p>
          <p>
            <a>Yes</a> |
          </p>
          <a>Add Answer</a>
        </div>
        <div className="row answerList">
          <p>This will be a list of answers</p>
        </div>
      </div>
    );
  }
}

export default Question;
