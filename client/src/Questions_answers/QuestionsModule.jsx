import React from 'react';
import Search from './search.jsx';
import ModalQuestion from './ModalQuestion.jsx';

class QuestionsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestionModal: false,
      questionsLimit: 2,
    };
    this.showQuestionModal = this.showQuestionModal.bind(this);
    this.closeQuestionModal = this.closeQuestionModal.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.questionsShown = this.state.questionsLimit;
  }

  showQuestionModal(e) {
    // this.e.preventDefault();
    this.setState({
      showQuestionModal: true,
    });
  }

  closeQuestionModal(e) {
    this.setState({
      showQuestionModal: false,
    });
  }

  showMoreQuestions(e) {
    let currentLimit = this.state.questionsLimit;
    const newLimit = (currentLimit += 2);
    this.setState({
      questionsLimit: newLimit,
    });
    console.log(this.state.questionsLimit);
  }

  render() {
    return (
      <div>
        <Search questionsShown={this.state.questionsLimit} />
        <ModalQuestion
          close={this.closeQuestionModal}
          show={this.state.showQuestionModal}
        />
        <div className="row">
          <button
            type="button"
            onClick={e => {
              this.showMoreQuestions();
            }}
          >
            More Answered Questions
          </button>
          <button
            type="button"
            onClick={e => {
              this.showQuestionModal();
            }}
          >
            Add a quesiton +
          </button>
        </div>
      </div>
    );
  }
}

export default QuestionsModule;
