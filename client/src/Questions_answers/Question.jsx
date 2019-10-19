import React from 'react';
import $ from 'jquery';
import Answer from './Answer.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      answersLimit: 2,
      showButton: false,
    };
    this.helpfullnessButton = this.helpfullnessButton.bind(this);
    this.helpfullnessCount = this.props.helpfullness;
  }

  componentDidMount() {
    this.helpfullnessCount = this.props.helpfullness;
    const idParam = this.props.id;
    $.get(`http://52.26.193.201:3000/qa/${idParam}/answers`, data => {}).then(
      results => {
        const dataCopy = results.results.slice();
        const sorted = dataCopy.sort(compare);
        this.setState({
          answers: sorted,
        });
        if (this.state.answers.length > 2) {
          this.setState({
            showButton: true,
          });
        }
        console.log(
          'This is the list of answers: ',
          this.state,
          this.state.showButton
        );
      }
    );
  }

  // componentDidUpdate(prevProps) {
  //   let helpfullnessCount = this.props.helpfullness;
  //   if (helpfullnessCount === prevProps.helpfullness) {
  //     helpfullnessCount += 1;
  //     helpfullnessCount = this.props.helpfullness;
  //   }
  // }

  helpfullnessButton(e) {
    this.props.helpfullnessButton(this.helpfullnessCount, this.props.id);
  }

  render() {
    const buttonStyle = this.state.showButton ? {} : { display: 'none' };
    const noAnswers = !this.state.answers.length ? { display: 'none' } : {};
    return (
      <div>
        <div className="row">
          <div className="col-md-9">
            <p className="question">Q: {this.props.currQuestion}</p>
          </div>
          <div className="col-md-3 helpfulQuestion">
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
              ({this.helpfullnessCount}) |
              <button type="button" className="helpful-button">
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
            {this.state.answers
              .slice(0, this.state.answersLimit)
              .map((answer, i) => (
                <Answer
                  userName={answer.answerer_name}
                  body={answer.body}
                  date={answer.date}
                  helpfullness={answer.helpfulness}
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
          <button type="button" className="more-answers-button">
            Load more answers
          </button>
        </div>
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
