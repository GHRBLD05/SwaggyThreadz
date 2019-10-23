import React from 'react';
import OutfitCard from './outfitCard.jsx';

export default class Outfit extends React.Component {
  render() {
    return (
      <div className="productCardWrapper">
        <div className="col-md-12 text-left">
          <h3>Your Outfit</h3>
        </div>
        <div className="container-fluid">
          <div
            id="outfitCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
            data-type="multi"
            data-wrap="false"
          >
            <div className="carousel-inner row w-100 mx-auto ro" role="listbox">
              <div className="carousel-item col-md-3 active">
                <OutfitCard />
              </div>
            </div>
            <a
              className="carousel-control-prev text-faded"
              href="#outfitCarousel"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-chevron-left fa-lg text-muted"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next text-faded"
              href="#outfitCarousel"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-chevron-right fa-lg text-muted"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
