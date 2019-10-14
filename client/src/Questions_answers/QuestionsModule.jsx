import React from 'react';
import Search from './search.jsx';
import ModalQuestion from './ModalQuestion.jsx';

class QuestionsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.showQuestionModal = this.showQuestionModal.bind(this);
  }

  showQuestionModal(e) {
    // this.e.preventDefault();
    this.setState({
      showModal: true,
    });
  }

  render() {
    return (
      <div>
        <Search />
        <ModalQuestion show={this.state.showModal} />
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
