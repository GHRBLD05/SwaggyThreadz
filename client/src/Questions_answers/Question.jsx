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
          <div className="col-md-10">
            <p className="question">Q: Question will be here</p>
          </div>
          <div className="col-md-2 helpfulQuestion">
            <p>
              Helpful?<button type="button">Yes</button>(25) |
              <button type="button">Add Answer</button>
            </p>
          </div>
        </div>
        <div className="row answerList">
          <div className="col-md-12">
            <p>This will be a list of answers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
