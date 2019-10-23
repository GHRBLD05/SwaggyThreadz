import React from 'react';
import OutfitCard from './outfitCard.jsx';
import AddToOutfitCard from './addToOutfitCard.jsx';

export default class Outfit extends React.Component {
  constructor(props) {
    super(props);
    // localStorage.removeItem('outfits');
    this.state = {
      outfits: JSON.parse(localStorage.getItem('outfits'))
    };
    this.state.outfits = [];
    localStorage.setItem('outfits', JSON.stringify(this.state.outfits));
  }

  addToOutfit(e, product) {
    e.preventDefault();
    const outfits = this.state.outfits.slice();
    outfits.push(product);
    localStorage.setItem('outfits', JSON.stringify(outfits));
    this.setState({
      outfits,
    });
  }

  render() {
    this.props.currentProduct.imageUrl = this.props.currentStyle.photos[0].url;
    this.props.currentProduct.thumbnail_url = this.props.currentStyle.photos[0].thumbnail_url;
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
              {this.state.outfits.map((outfit, i) => (
                <div
                  key={i}
                  className={
                    i === 0
                      ? 'carousel-item col-md-3 active'
                      : 'carousel-item col-md-3'
                  }
                >
                  <OutfitCard product={outfit} key={i} />
                </div>
              ))}
              <div
                className={
                  this.state.outfits.length === 0
                    ? 'carousel-item col-md-3 active'
                    : 'carousel-item col-md-3'
                }
              >
                <AddToOutfitCard
                  product={this.props.currentProduct}
                  addToOutfit={this.addToOutfit.bind(this)}
                />
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
