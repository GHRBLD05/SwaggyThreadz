import React, { Component } from 'react';

class ImageModal extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     url: this.props.image,
  //   };
  // }

  // componentWillReceiveProps(newProps) {
  //   if (newProps !== this.props) {
  //     this.setState({
  //       url: newProps.image,
  //     });
  //   }
  // }

  render() {
    return (
      <div className="modal" id="my-modal">
        <div className="modal-dialog">
          <div className="modal-content my-modal-content">
            <div className="modal-header">
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                style={{ display: 'show' }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                className="modalImg"
                id={`modalImg${this.props.index}`}
                src={this.props.image}
                alt={this.props.name}
                key={this.props.index}
                style={{ width: '1250px', height: 'auto', border: '0px 150px' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ImageModal;
