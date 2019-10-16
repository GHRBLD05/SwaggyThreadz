import React from "react";

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
          <div className="col-md-10">
            <p>{this.props.body}</p>
          </div>
        </div>
        <div className="row answer-info">
          <p className="user-date-helpful">
            by {this.props.userName}, {this.date.toDateString()} | Helpful?
          </p>
          <p className="user-date-helpful">
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
              Report
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Answer;
