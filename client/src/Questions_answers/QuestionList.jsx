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
      prevState.questions.push(results);
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
            currQuestion={question.results[0].question_body}
            helpfullness={question.results[0].question_helpfulness}
          />
        ))}
      </div>
    );
  }
}

export default QuestionList;
