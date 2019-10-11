import React from 'react';
import Question from './Question.jsx';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions = [];
    }
  }

  render() {
    return (
      <div>
        <p>Question Placeholder</p>
      </div>
    )
  }
}

export default QuestionList;