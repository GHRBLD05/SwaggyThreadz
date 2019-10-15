import React from 'react';
import $ from 'jquery';
import Question from './Question.jsx';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    $.get('http://52.26.193.201:3000/qa/1', data => {
      console.log(data);
    }).then(results => {
      const prevState = this.state;
      const dataCopy = results.results.slice();
      const sorted = dataCopy.sort(compare);
      prevState.questions.push(sorted);
      this.setState(prevState);
      // this.setState({ questions: results });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        {this.state.questions.map((question, i) => (
          <Question
            key={i}
            currQuestion={question[0].question_body}
            helpfullness={question[0].question_helpfulness}
          />
        ))}
      </div>
    );
  }
}

const compare = function(a, b) {
  const itemA = a.question_helpfulness;
  const itemB = b.question_helpfulness;

  let comparison = 0;
  if (itemB > itemA) {
    comparison = 1;
  } else if (itemB < itemA) {
    comparison = -1;
  }
  return comparison;
};

export default QuestionList;
