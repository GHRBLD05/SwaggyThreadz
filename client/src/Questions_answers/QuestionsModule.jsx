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
    //this.props.currentProduct.questions.unshift(null);
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
  }

  render() {
    const buttonStyling = {
      margin: '9px',
      fontsize: '0.97em',
      fontsize: '0.75em',
      padding: '0.75em 0.65em',
      backgroundcolor: 'white',
      border: '0.01em solid black',
      color: 'rgba(0, 0, 0, 0.65)',
      fontweight: 'bold',
      color: 'rgba(0, 0, 0, .65)',
      fontweight: 'bold',
    };
    const anyQuestions = !this.props.currentProduct.questions.length
      ? { display: 'none' }
      : buttonStyling;
    return (
      <div id="module-questions" className="root-qa">
        <Search
          questionsShown={this.state.questionsLimit}
          handleSearch={this.handleSearch}
          currentProduct={this.props.currentProduct}
        />
        <ModalQuestion
          close={this.closeQuestionModal}
          show={this.state.showQuestionModal}
          productId={this.props.currentProduct}
        />
        <div className="row">
          <button
            className="button more-questions focus"
            type="button"
            style={anyQuestions}
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
