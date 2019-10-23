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
    const lessThanTwo = this.props.currentProduct.questions.length <= 2 ? {} : {display: 'none'};
    console.log('this should be the current product', this.props.currentProduct.questions)
    if (this.props.searchTerm.length >= 3) {
      console.log('hitting if for search term')
      return (
        <div className="qa-overflow">
          {this.state.filteredQuestions.map((question, i) => (
            <Question
              key={i}
              currQuestion={question.question_body}
              helpfullness={question.question_helpfulness}
              id={question.question_id}
              answers={Object.values(question.answers)}
              showAnswerModal={this.props.showAnswerModal}
            />
          ))}
        </div>
      );
    } else if (this.props.currentProduct.questions[0].question_body === '') {
      return null;
    } else {
      return (
        <div className="qa-overflow">
          {this.props.currentProduct.questions
            .slice(0, this.props.questionsShown)
            .map((question, i) => {
            return (

              <Question
                key={i}
                currQuestion={question.question_body}
                helpfullness={question.question_helpfulness}
                id={question.question_id}
                showAnswerModal={this.props.showAnswerModal}
                answers={Object.values(question.answers)}
              />
            )})}
        </div>
      );
    }
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
