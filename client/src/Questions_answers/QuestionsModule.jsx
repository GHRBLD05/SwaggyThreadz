import React from 'react';
import Search from './search.jsx';
import ModalQuestion from './ModalQuestion.jsx';
import ModalAnswer from './ModalAnswer.jsx';

class QuestionsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestionModal: false,
      showAnswerModal: false,
      questionsLimit: 2,
    };
    this.showQuestionModal = this.showQuestionModal.bind(this);
    this.closeQuestionModal = this.closeQuestionModal.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.showAnswerModal = this.showAnswerModal.bind(this);
    this.closeAnswerModal = this.closeAnswerModal.bind(this);
    this.questionsShown = this.state.questionsLimit;
    console.log('this should be the current product', props);
  }

  showQuestionModal(e) {
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

  render() {
    return (
      <div className="root-qa">
        <Search
          questionsShown={this.state.questionsLimit}
          handleSearch={this.handleSearch}
          currentProduct={this.props.currentProduct}
          showAnswerModal={this.showAnswerModal}
        />
        <ModalQuestion
          close={this.closeQuestionModal}
          show={this.state.showQuestionModal}
          productId={this.props.currentProduct}
        />
        <ModalAnswer
          close={this.closeAnswerModal}
          show={this.state.showAnswerModal}
          productId={this.props.currentProduct}
        />
        <div className="row">
          <button
            className="button more-questions focus"
            type="button"
            onClick={e => {
              this.showMoreQuestions();
            }}
          >
            More Answered Questions
          </button>
          <button
            type="button"
            className="button add-question focus"
            onClick={e => {
              this.showQuestionModal();
            }}
          >
            Add a question +
          </button>
        </div>
      </div>
    );
  }
}

export default QuestionsModule;
