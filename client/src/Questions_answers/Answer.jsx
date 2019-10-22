import React from 'react';
import $ from 'jquery';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedYes: false,
      helpCount: this.props.helpfullness
    };
    this.date = new Date(this.props.date);
  }

  helpfullnessButton(e) {
    if (this.state.clickedYes === false) {

      let idParam = this.props.answerId;
      $.ajax({
        url: `http://52.26.193.201:3000/qa/answer/${idParam}/helpful`,
        type: 'PUT',
        succes: status => {
          console.log('Succes: ', status);
        },
      });
      let oldCount = this.state.helpCount;
      let newCount = oldCount += 1;
      this.setState({
        clickedYes: true,
        helpCount: newCount,
      })
    }

  }

  render() {
    return (
      <div>
        <div className="row answer-row">
          <div className="col-md-10">
            <p>{this.props.body}</p>
          </div>
        </div>
        <div className="row">
            {this.props.photos.map((photo, i) => {
              return (
                <img src={photo.url} key={i} className="photos"></img>
              )
            })}
          </div>
        <div className="row justify-content-start answer-info">
          <p className="user-date-helpful">
            by {this.props.userName}, {this.date.toDateString()} | Helpful?
          </p>
          <p className="user-date-helpful">
            <button
              type="button"
              className="helpful-button"
              onClick={e => {
                this.helpfullnessButton(e);
              }}
            >
              Yes
            </button>
            ({this.state.helpCount}) |
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


