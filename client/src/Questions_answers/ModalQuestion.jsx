import React from 'react';

class ModalQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickName: '',
      email: ''
    };
    this.filledOut = false;
    this.handleQuesiton = this.handleQuestion.bind(this);
    this.checkData = this.checkData.bind(this);
    this.submitModal = this.submitModal.bind(this);
  }

  handleQuestion(event) {
    this.setState({
      question: event.target.value,
    });
  }

  handlenickName(event) {
    this.setState({
      nickName: event.target.value,
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  checkData(data) {
    // POST request to the api when button is clicked
    if (!this.state.question.length) {
      alert('You must ask a question to submit');
    } else if (!this.state.nickName.length) {
      alert('You must provide a nickname to submit');
    } else if (!this.state.email.length) {
      alert('You must provide a viable email to submit');
    } else {
      this.filledOut = true;
      this.submitModal(this.state);
    }
  }

  submitModal(data) {
    if (this.filledOut === true) {
      // Make the POST request
      this.props.show = false;
    }

    // Remeber to put this event handler in the button
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <h5>What is your question? (mandatory)</h5>
        <input
          type="text"
          maxLength="1000"
          value={this.state.question}
          onChange={e => {
            this.handleQuestion(e);
          }}
        ></input>
        <h5>What is your nickname? (mandatory)</h5>
        <input
          type="text"
          maxLength="60"
          placeholder="Example: jackson11!"
          value={this.state.nickName}
          onChange={e => {
            this.handlenickName(e);
          }}
        ></input>
        <h6>For privacy reasons, do not use your full name or email address</h6>
        <h5>What is your email? (mandatory)</h5>
        <input
          type="text"
          value={this.state.email}
          maxLength="60"
          onChange={e => {
            this.handleEmail(e);
          }}
        ></input>
        <h6>For authentication reasons, you will not be emailed</h6>
        <button
          type="button"
          onClick={() => {
            this.checkData(this.state);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default ModalQuestion;
