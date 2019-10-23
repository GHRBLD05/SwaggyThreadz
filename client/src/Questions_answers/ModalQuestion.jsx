import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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
      const param = this.props.productId.id;
      // eslint-disable-next-line prefer-const
      let options = {
        body: this.state.question,
        name: this.state.nickName,
        email: this.state.email,
      };

      fetch(`http://52.26.193.201:3000/qa/${param}`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(options),
      })
        .then(response => response.text())
        .then(function(data) {
          console.log('post data from promise:', data);
        })
        .catch(function(error) {
          console.log('Failed', error);
        });

      this.props.close();
    }

    // Remeber to put this event handler in the button
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return ReactDOM.createPortal(
      <aside className="modal-cover">
        <div className="modal-area">
          <button
            type="button"
            className="_modal-close"
            onClick={e => {
              this.props.close(e);
            }}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div className="modal-body">
            <label htmlFor="question-form" className="modal-headings">
              What is your question?{' '}
              <span className="mandatory">(mandatory)</span>
            </label>
            <textarea
              className="question-form border border-primary"
              name="question-form"
              maxLength="1000"
              value={this.state.question}
              onChange={e => {
                this.handleQuestion(e);
              }}
            ></textarea>
            <div className="row justify-content-center">
              <h6>
                For privacy reasons, do not use your full name or email address
              </h6>
            </div>
            <div className="row name-email-labels">
              <label htmlFor="question-name" className="pl-0 modal-headings">
                Nickname: <span className="mandatory">(mandatory)</span>
              </label>
              <label htmlFor="question-email" className="pl-3 modal-headings">
                Email: <span className="mandatory">(mandatory)</span>
              </label>
            </div>
            <div className="row name-email-area">
              <input
                type="text"
                className="col-md-5"
                name="question-name"
                maxLength="60"
                placeholder="Example: jackson11!"
                value={this.state.nickName}
                onChange={e => {
                  this.handlenickName(e);
                }}
              ></input>
              <input
                type="text"
                className="col-md-7"
                name="question-email"
                value={this.state.email}
                maxLength="60"
                onChange={e => {
                  this.handleEmail(e);
                }}
              ></input>
            </div>
            <h6>For authentication reasons, you will not be emailed</h6>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.checkData(this.state);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </aside>,
      document.body
    );
  }
}

export default ModalQuestion;
