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
        <div className="row">
          <div className="col-2">
            <p className="question">Q: Question will be here</p>
          </div>
          <div className="d-flex justify-content-end helpfulQuestion">
            <p>
              Helpful?<button type="button">Yes</button>(25) |
              <button type="button">Add Answer</button>
            </p>
          </div>
        </div>
        <div className="row answerList">
          <p>This will be a list of answers</p>
        </div>
      </div>
    );
  }
}

export default Question;
