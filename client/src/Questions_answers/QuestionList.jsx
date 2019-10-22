import React from 'react';
import $ from 'jquery';
import Question from './Question.jsx';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsLimit: this.props.questionsShown,
      filteredQuestions: [],
    };
    this.filterQuestions = this.filterQuestions.bind(this);
  }

  componentDidMount() {
    // Remember to change id param
    const param = this.props.currentProduct.id;

    //   $.get(`http://52.26.193.201:3000/qa/${param}`, data => {
    //     console.log(data);
    //   }).then(results => {
    //     const dataCopy = results.results.slice();
    //     const sorted = dataCopy.sort(compare);
    //     this.setState({
    //       questions: sorted,
    //     });
    //   });
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.filterQuestions();
    }
  }

  filterQuestions() {
    const notFiltered = this.props.currentProduct.questions;
    const filtered = notFiltered.filter(question =>
      question.question_body.toLowerCase().includes(this.props.searchTerm)
    );
    this.setState({
      filteredQuestions: filtered,
    });
  }

  render() {
    const lessThanTwo = this.state.questions.length <= 2 ? {} : {display: 'none'};

    if (this.props.searchTerm.length >= 3) {
      return (
        <div className="qa-overflow">
          {this.state.filteredQuestions.map((question, i) => (
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
    return (
      <div className="qa-overflow">
        {this.props.currentProduct.questions
          .slice(0, this.props.questionsShown)
          .map((question, i) => (
            <Question
              key={i}
              currQuestion={question.question_body}
              helpfullness={question.question_helpfulness}
              id={question.question_id}
              showAnswerModal={this.props.showAnswerModal}
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
