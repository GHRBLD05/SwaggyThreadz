import React from 'react';
import $ from 'jquery';
import Answer from './Answer.jsx';
import ModalAnswer from './ModalAnswer.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: Object.values(this.props.answers),
      answersLimit: 2,
      showButton: false,
      collapseButton: false,
      showAnswerModal: false,
      helpCount: this.props.helpfullness,
      clickedYes: false,
    };
    this.helpfullnessButton = this.helpfullnessButton.bind(this);
    this.helpfullnessCount = this.props.helpfullness;
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
    this.showAnswerModal = this.showAnswerModal.bind(this);
    this.closeAnswerModal = this.closeAnswerModal.bind(this);
  }

  helpfullnessButton(e) {
    if (this.state.clickedYes === false) {
      const idParam = this.props.id;
      $.ajax({
        url: `http://52.26.193.201:3000/qa/question/${idParam}/helpful`,
        type: 'PUT',
        succes: status => {
          console.log('Succes: ', status);
        },
      });
      let oldCount = this.state.helpCount;
      const newCount = (oldCount += 1);
      this.setState({
        helpCount: newCount,
        clickedYes: true,
      });
    }
  }

  showMoreAnswers(e) {
    let currentLimit = this.state.answersLimit;
    const newLimit = (currentLimit += 2);
    this.setState({
      answersLimit: newLimit,
    });

    if (this.state.answers.length - this.state.answersLimit <= 1) {
      this.setState({
        showButton: false,
        collapseButton: true,
      });
    }
  }

  showAnswerModal(e) {
    this.setState({
      showAnswerModal: true,
    });
  }

  closeAnswerModal(e) {
    this.setState({
      showAnswerModal: false,
    });
  }

  collapseAnswers(e) {
    this.setState({
      answersLimit: 2,
      showButton: true,
      collapseButton: false,
    });
  }

  render() {
    const buttonStyle = this.state.showButton ? {} : { display: 'none' };
    const noAnswers = !this.props.answers.length ? { display: 'none' } : {};
    const lastAnswer = this.state.collapseButton ? {} : { display: 'none' };

    return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <p className="question">Q: {this.props.currQuestion}</p>
          </div>
          <div className="col-md-3 mt-2 helpfulQuestion">
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
              ({this.state.helpCount}) |
              <button
                type="button"
                className="helpful-button"
                onClick={e => {
                  this.showAnswerModal(e);
                }}
              >
                Add Answer
              </button>
            </p>
            <div className="container"></div>
          </div>
        </div>
        <div className="row justify-content-start answerList">
          <div className="answerPtag">
            <p style={noAnswers}>A: </p>
          </div>
          <div className="answer-box">
            {this.props.answers.sort(compare)
              .slice(0, this.state.answersLimit)
              .map((answer, i) => (
                <Answer
                  userName={answer.answerer_name}
                  body={answer.body}
                  date={answer.date}
                  helpfullness={answer.helpfulness}
                  photos={answer.photos}
                  answerId={answer.id}
                  key={i}
                  helpfullnessButton={this.helpfullnessButton}
                />
              ))}
          </div>
        </div>
        <div
          className="row justify-content-start more-answers-button"
          style={buttonStyle}
        >
          <button
            type="button"
            className="more-answers-button"
            onClick={e => {
              this.showMoreAnswers(e);
            }}
          >
            Load more answers
          </button>
        </div>
        <button
          type="button"
          className="more-answers-button"
          style={lastAnswer}
          onClick={e => {
            this.collapseAnswers(e);
          }}
        >
          Collapse Answers
        </button>
        <ModalAnswer
          close={this.closeAnswerModal}
          show={this.state.showAnswerModal}
          questionId={this.props.id}
          currQuestion={this.props.currQuestion}
          productName={this.props.productName}
        />
      </div>
    );
  }
}

const compare = function(a, b) {
  const itemA = a.helpfulness;
  const itemB = b.helpfulness;

  let comparison = 0;
  if (itemB > itemA) {
    comparison = 1;
  } else if (itemB < itemA) {
    comparison = -1;
  }
  return comparison;
};

export default Question;
