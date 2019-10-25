import React from 'react';
import $ from 'jquery';

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedYes: false,
      helpCount: this.props.helpfullness,
      isReported: false
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

  reportAnswer(e) {
    let idParam = this.props.answerId;
      $.ajax({
        url: `http://52.26.193.201:3000/qa/answer/${idParam}/report`,
        type: 'PUT',
        succes: status => {
          console.log('Answer was reported ', status);
        },
      })
      .then((results) => {
        console.log('It worked')
      });
      this.setState({
        isReported: true
      })
  }


  render() {
    const isSeller = this.props.userName === 'Seller' ? {fontWeight: "bold", opacity: '1'} : {};
    const isReported = this.state.isReported ? 'Reported' : 'Report';

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
                <img src={photo} key={i} className="photos"></img>
              )
            })}
          </div>
        <div className="row justify-content-start answer-info">
          <p className="user-date-helpful">
            by <span style={isSeller}>{this.props.userName}</span>, {this.date.toDateString()} | Helpful?
          </p>
          <p className="yes-report">
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
            <button
            type="button"
            className="helpful-button"
            onClick={(e) => {
              this.reportAnswer(e);
            }}>
              {isReported}
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Answer;


