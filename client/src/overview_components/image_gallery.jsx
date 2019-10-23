import React from "react";

class ImageGallery extends React.Component {
  componentDidUpdate() {
    $("#my-carousel .carousel-control-prev").css("visibility", "hidden");
    if (this.props.currentStyle.photos.length <= 1) {
      $("#my-carousel .carousel-control-next").css("visibility", "hidden");
    } else {
      $("#my-carousel .carousel-control-next").css("visibility", "visible");
    }
  }

  render() {
    const {
      currentProduct,
      currentStyle,
      stylesArray,
      currentSize
    } = this.props;
    return (
      <div>
        {console.log("this better fucking work", this.props)}
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
                className={i === 0 ? "active" : null}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner" style={{ cursor: "zoom-in" }}>
            {currentStyle.photos.map((photo, i) => (
              <div
                className={i === 0 ? "carousel-item active" : "carousel-item"}
              >
                <img
                  className="img-fluid mx-auto d-block"
                  src={photo.url}
                  alt={currentStyle.name}
                />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#my-carousel"
            role="button"
            data-slide="prev"
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
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default ImageGallery;
