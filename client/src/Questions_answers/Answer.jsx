import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.date = new Date(this.props.date);
  }

  render() {
    return (
      <div>
        <div className="row answer-row">
          <p>{this.props.body}</p>
        </div>
        <div className="row answer-info">
          <p>
            by {this.props.userName}, {this.date.toDateString()}
          </p>
          <p>
            | Helpful?
            <button
              type="button"
              className="helpful-button"
              onClick={e => {
                this.props.helpfullnessButton(e);
              }}
            >
              Yes
            </button>
            ({this.props.helpfullness}) |
            <button type="button" className="helpful-button">
              Add Answer
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Answer;
