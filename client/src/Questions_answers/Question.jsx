import React from 'react';
import $ from 'jquery';
import Answer from './Answer.jsx';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
    this.helpfullnessButton = this.helpfullnessButton.bind(this);
  }

  componentDidMount() {
    const idParam = this.props.id;
    $.get(`http://52.26.193.201:3000/qa/${idParam}/answers`, data => {}).then(
      results => {
        const dataCopy = results.results.slice();
        const sorted = dataCopy.sort(compare);
        this.setState({
          answers: sorted,
        });
        console.log('This is the list of answers: ', this.state);
      }
    );
  }

  helpfullnessButton(e) {
    const idParam = this.props.id;

    $.ajax({
      url: `http://52.26.193.201:3000/${idParam}/helpful`,
      type: 'PUT',
      succes: status => {
        console.log('Succes: ', status);
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
          <div className="col-sm-1">
            <p className="answerPtag">A: </p>
          </div>
          <div>
            {this.state.answers.map((answer, i) => (
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
