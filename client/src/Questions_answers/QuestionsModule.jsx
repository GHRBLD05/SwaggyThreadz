import React from 'react';
import Search from './search.jsx';
import ModalQuestion from './ModalQuestion.jsx';
// import ModalAnswer from './ModalAnswer.jsx';

class QuestionsModule extends React.Component {
  constructor({ currentProduct }) {
    super({ currentProduct });
    this.state = {
      showQuestionModal: false,
      showAnswerModal: false,
      questionsLimit: 2,
    };
    this.showQuestionModal = this.showQuestionModal.bind(this);
    this.closeQuestionModal = this.closeQuestionModal.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  showMoreQuestions(e) {
    let currentLimit = this.state.questionsLimit;
    const newLimit = (currentLimit += 2);
    this.setState({
      questionsLimit: newLimit,
    });
    console.log(this.state.questionsLimit);
  }

  handleSearch(term) {
    const originalState = this.state;
    if (term.length >= 3) {
      this.setState({
        questionsLimit: 10,
      });
    } else if (term.lenght < 3) {
      this.setState(originalState);
    }
  }

  render() {
    return (
      <div>
        <Search
          questionsShown={this.state.questionsLimit}
          handleSearch={this.handleSearch}
        />
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
