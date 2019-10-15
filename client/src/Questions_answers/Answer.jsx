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
          <p>{this.props.body}</p>
        </div>
        <div className="row answer-info">
          <p>
            By {this.props.userName}, {this.props.date} |
          </p>
          <p>
            Helpful?
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
