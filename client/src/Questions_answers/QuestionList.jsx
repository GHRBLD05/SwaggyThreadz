import React from "react";
import $ from "jquery";
import Question from "./Question.jsx";

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionsShown: 2
    };
  }

  componentDidMount() {
    // Remember to change id param

    $.get("http://52.26.193.201:3000/qa/2", data => {
      console.log(data);
    }).then(results => {
      const dataCopy = results.results.slice();
      const sorted = dataCopy.sort(compare);
      this.setState({
        questions: sorted
      });
      // this.setState({ questions: results });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        {this.state.questions
          .slice(0, this.state.questionsShown)
          .map((question, i) => (
            <Question
              key={i}
              currQuestion={question.question_body}
              helpfullness={question.question_helpfulness}
              id={question.question_id}
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
