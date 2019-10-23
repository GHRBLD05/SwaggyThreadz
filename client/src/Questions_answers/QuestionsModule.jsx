import React from 'react';
import Search from './search.jsx';
import ModalQuestion from './ModalQuestion.jsx';

class QuestionsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuestionModal: false,
      questionsLimit: 2,
      showButton: true,
    };
    this.showQuestionModal = this.showQuestionModal.bind(this);
    this.closeQuestionModal = this.closeQuestionModal.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);
    this.questionsShown = this.state.questionsLimit;
  }

 componentWillReceiveProps(newProps) {
   if (this.props.currentProduct.questions.length <= 2) {
      this.setState({
        showButton: false,
      })
   } else {
     this.setState({
       showButton: true,
     })
   }
   if (newProps !== this.props) {
     this.setState({
       questionsLimit: 2,
     })
   }
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
          {this.state.showButton ? null : <button
            className="button more-questions focus"
            type="button"
            onClick={e => {
              this.showMoreQuestions();
            }}
          >
            More Answered Questions
          </button>}
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
