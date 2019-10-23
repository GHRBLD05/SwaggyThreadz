import React from 'react';

const ImageGallery = props => (
  <div>
    <div
      id="my-carousel"
      className="carousel slide"
      data-ride="carousel"
      role="listbox"
    >
      <ol className="carousel-indicators">
        {props.currentStyle.photos.map((photo, i) => (
          <li
            data-target="#my-carousel"
            data-slide-to={i}
            className={i === 0 ? 'active' : null}
            key={i}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {props.currentStyle.photos.map((photo, i) => (
          <div
            className={i === 0 ? 'carousel-item active' : 'carousel-item'}
            key={i}
          >
            <img
              className="img-fluid mx-auto d-block"
              src={photo.url}
              alt={props.currentStyle.name}
              key={i}
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
