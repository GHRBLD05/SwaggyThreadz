import React from "react";
import Search from "./search.jsx";
import ModalQuestion from "./ModalQuestion.jsx";

class QuestionsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      questionsLimit: 2
    };
    this.showQuestionModal = this.showQuestionModal.bind(this);
    this.closeQuestionModal = this.closeQuestionModal.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.questionsShown = this.state.questionsLimit;
  }

  showQuestionModal(e) {
    // this.e.preventDefault();
    this.setState({
      showModal: true
    });
  }

  closeQuestionModal(e) {
    this.setState({
      showModal: false
    });
  }

  showMoreQuestions() {
    const moreQuestions = (this.state.questionsShown += 2);
    this.setState({
      questionsLimit: moreQuestions
    });
  }

  render() {
    return (
      <div>
        <Search questionsShown={this.questionsShown} />
        <ModalQuestion
          close={this.closeQuestionModal}
          show={this.state.showModal}
        />
        <button
          type="button"
          onClick={e => {
            this.showQuestionModal();
          }}
        >
          Ask a quesiton
        </button>
      </div>
    );
  }
}

export default QuestionsModule;
