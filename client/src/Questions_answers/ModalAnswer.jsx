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
    let newPhotos = Array.from(event.target.files);
    this.setState({
      photos: newPhotos
    })

  }

  checkData(data) {
    console.log('Modal props', this.props);
    // POST request to the api when button is clicked
    if (!this.state.answer.length) {
      alert('You provide an answer to submit');
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
      let param = this.props.questionId;

      const options = {
        "body": this.state.answer,
        "name": this.state.nickName,
        "email": this.state.email,
        "photos": this.state.photos
      }
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
            <h5 className="modal-headings">What is your answer? (mandatory)</h5>
            <input
              className="question-form"
              type="text"
              maxLength="1000"
              value={this.state.answer}
              onChange={e => {
                this.handleAnswer(e);
              }}
            ></input>
            <h5 className="modal-headings">
              What is your nickname? (mandatory)
            </h5>
            <input
              type="text"
              maxLength="60"
              placeholder="Example: jackson11!"
              value={this.state.nickName}
              onChange={e => {
                this.handlenickName(e);
              }}
            ></input>
            <h6>
              For privacy reasons, do not use your full name or email address
            </h6>
            <h5 className="modal-headings">What is your email? (mandatory)</h5>
            <input
              type="text"
              value={this.state.email}
              maxLength="60"
              onChange={e => {
                this.handleEmail(e);
              }}
            ></input>
            <h6>For authentication reasons, you will not be emailed</h6>
            <h5>If you would like to share photos, upload them here</h5>
            <input
            type="file"
            multiple
            accept="image/png, image/jpeg"
            onChange={(e) => {
              this.handlePhotos(e);
            }}></input>
            <button
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
