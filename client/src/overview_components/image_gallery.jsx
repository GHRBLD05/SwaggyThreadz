import React from 'react';

const ImageGallery = props => (
  <div>
    {console.log('this better fucking work', props)}
    <div
      id="my-carousel"
      className="carousel slide"
      data-ride="carousel"
      role="listbox"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#my-carousel"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#my-carousel" data-slide-to="1"></li>
        <li data-target="#my-carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="item active">
          <img
            // key={props.currentProduct.id}
            src={props.currentStyle.photos[0].url}
            alt={props.currentProduct.name}
          />
        </div>
        <div className="item">
          <img
            // className="img-responsive"
            src=""
            alt="Second slide"
          />
        </div>
        <div className="item">
          <img
            // className="img-responsive"
            src="..."
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#my-carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#my-carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);

export default ImageGallery;
