import React from 'react';
import $ from 'jquery';
import AnswerList from './AnswerList.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.helpfullnessButton = this.helpfullnessButton.bind(this);
  }

  helpfullnessButton(e) {
    const idParam = this.props.id;

    $.ajax({
      url: `http://52.26.193.201:3000/${idParam}/helpful`,
      type: 'PUT',
      succes(status) {
        console.log("Succes: ", status);
      },
    });
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
              <button
                type="button"
                className="helpful-button"
                onClick={e => {
                  this.helpfullnessButton(e);
                }}
              >
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
