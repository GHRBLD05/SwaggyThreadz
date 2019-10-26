import React, { Component } from 'react';

class ImageModal extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     index: 0,
  //   };
  // }

  render() {
    return (
      <div className="modal" id="my-modal">
        <div className="modal-dialog modal-dialog-center modal-large">
          <div className="modal-content">
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
                src={this.props.images}
                alt={this.props.name}
                key={this.props.index}
                style={{ width: '1250px', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ImageModal;
