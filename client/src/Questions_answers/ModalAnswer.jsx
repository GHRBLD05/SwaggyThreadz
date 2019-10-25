import React from 'react';
import ReactDOM from 'react-dom';

class ModalAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickName: '',
      email: '',
      photos: [],
    };
    this.filledOut = false;
    this.handleAnswer = this.handleAnswer.bind(this);
    this.checkData = this.checkData.bind(this);
    this.submitModal = this.submitModal.bind(this);
  }

  handleAnswer(event) {
    this.setState({
      answer: event.target.value,
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

  handlePhotos(event) {
    const newPhotos = this.state.photos;
    newPhotos.push(event.target.value);
    this.setState({
      photos: newPhotos,
    });
  }

  checkData(data) {
    // POST request to the api when button is clicked
    if (!this.state.answer.length) {
      alert('You must enter an answer to submit');
    } else if (!this.state.nickName.length) {
      alert('You must enter a nickname to submit');
    } else if (!this.state.email.length || !this.state.email.includes('@')) {
      alert('You must enter a viable email to submit');
    } else {
      this.filledOut = true;
      this.submitModal(this.state);
    }
  }

  submitModal(data) {
    if (this.filledOut === true) {
      // Make the POST request
      const param = this.props.questionId;

      const options = {
        body: this.state.answer,
        name: this.state.nickName,
        email: this.state.email,
        photos: this.state.photos,
      };

      fetch(`http://52.26.193.201:3000/qa/${param}/answers`, {
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
              Submit your answer <br></br><span className="product-name">{this.props.productName}: "{this.props.currQuestion}"</span>
              <span className="mandatory"> (required*)</span>
            </label>
            <textarea
              className="question-form border border-primary"
              name="question-form"
              maxLength="1000"
              value={this.state.question}
              onChange={e => {
                this.handleAnswer(e);
              }}
            ></textarea>
            <div className="row justify-content-center">
              <h6>
                For privacy reasons, do not use your full name or email address
              </h6>
            </div>
            <div className="row name-email-labels">
              <label htmlFor="question-name" className="pl-0 modal-headings">
                Nickname: <span className="mandatory">(required*)</span>
              </label>
              <label htmlFor="question-email" className="ml-4 modal-headings">
                Email: <span className="mandatory">(required*)</span>
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
            <div className="row pt-4">
              <label htmlFor="image-upload" className="modal-headings">
                Image url: <span className="mandatory">(optional)</span>
              </label>
              </div>
              <div className="row">
              <input
                type="text"
                className="image-upload"
                multiple
                onChange={e => {
                  this.handlePhotos(e);
                }}
              ></input>
            </div>
            <button
              className="submit-modal btn btn-primary"
              type="button"
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

export default ModalAnswer;
