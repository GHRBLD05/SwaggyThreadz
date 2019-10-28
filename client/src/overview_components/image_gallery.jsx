import React from 'react';
import ImageModal from './image_modal.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photosArray: this.props.currentStyle.photos,
      upperLimit: 1,
      lowerLimit: 0,
      currentIndex: 0,
    };
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    $('#my-carousel .carousel-control-prev').css('visibility', 'hidden');
    if (this.props.currentStyle.photos.length <= 1) {
      $('#my-carousel .carousel-control-next').css('visibility', 'hidden');
    } else {
      $('#my-carousel .carousel-control-next').css('visibility', 'visible');
    }
  }

  componentWillReceiveProps(newProps, state) {
    if (newProps !== this.props) {
      this.setState({
        photosArray: newProps.currentStyle.photos,
      });
    }
  }

  currentIndexInc() {
    this.setState({ currentIndex: this.state.currentIndex + 1 });
    console.log(this.state.currentIndex);
  }

  currentIndexDec() {
    this.setState({ currentIndex: this.state.currentIndex - 1 });
    console.log(this.state.currentIndex);
  }
  // modalLimitInc() {
  //   let oldUpperLimit = this.state.upperLimit;
  //   let oldLowerLimit = this.state.lowerLimit;
  //   const newLowerLimit = (oldLowerLimit += 1);
  //   const newUpperLimit = (oldUpperLimit += 1);
  //   this.setState({ upperLimit: newUpperLimit, lowerLimit: newLowerLimit });
  // }

  // modalLimitDec() {
  //   let oldUpperLimit = this.state.upperLimit;
  //   let oldLowerLimit = this.state.lowerLimit;
  //   const newLowerLimit = (oldLowerLimit -= 1);
  //   const newUpperLimit = (oldUpperLimit -= 1);
  //   this.setState({ upperLimit: newUpperLimit, lowerLimit: newLowerLimit });
  // }

  render() {
    const {
      currentProduct,
      currentStyle,
      stylesArray,
      currentSize,
    } = this.props;
    console.log('photos array ', this.props.currentStyle.photos);

    return (
      <div>
        <div>
          <div
            id="my-carousel"
            className="carousel slide"
            data-ride="carousel"
            role="listbox"
            data-wrap="false"
            data-interval="false"
          >
            <ol className="carousel-indicators">
              {currentStyle.photos.map((photo, i) => (
                <li
                  data-target="#my-carousel"
                  data-slide-to={i}
                  className={i === 0 ? 'active' : null}
                  key={i}
                ></li>
              ))}
            </ol>
            <div className="carousel-inner">
              {currentStyle.photos.map((photo, i) => (
                <div
                  className={
                    i === 0
                      ? 'carousel-item active text-center'
                      : 'carousel-item text-center'
                  }
                  key={i}
                >
                  <img
                    className="img-fluid mx-auto d-inline-block"
                    src={photo.url}
                    alt={currentStyle.name}
                    key={i}
                    data-toggle="modal"
                    data-target="#my-modal"
                    type="button"
                    style={{ cursor: 'zoom-in' }}
                  />
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#my-carousel"
              role="button"
              data-slide="prev"
              onClick={() => {
                this.currentIndexDec();
              }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#my-carousel"
              role="button"
              data-slide="next"
              onClick={() => {
                this.currentIndexInc();
              }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="modalContainer">
          <ImageModal
            name={this.props.currentStyle.name}
            image={this.props.currentStyle.photos[this.state.currentIndex].url}
            index={this.state.currentIndex}
          />
        </div>
      </div>
    );
  }
}

export default ImageGallery;
