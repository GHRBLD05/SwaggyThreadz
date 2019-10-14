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
            <p className="question">Q: {this.props.currQuestion}</p>
          </div>
          <div className="col-md-2 helpfulQuestion">
            <p>
              Helpful?
              <button type="button" className="helpful-button">
                Yes
              </button>
              ({this.props.helpfullness}) |
              <button type="button" className="helpful-button">
                Add Answer
              </button>
            </p>
            <div className="row"></div>
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
