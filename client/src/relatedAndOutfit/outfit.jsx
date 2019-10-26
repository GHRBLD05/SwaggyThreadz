import React from 'react';
import OutfitCard from './outfitCard.jsx';
import AddToOutfitCard from './addToOutfitCard.jsx';

export default class Outfit extends React.Component {
  constructor(props) {
    super(props);
    // localStorage.removeItem('outfits');
    // localStorage.removeItem('outfitIDs');
    this.state = {
      outfits: JSON.parse(localStorage.getItem('outfits')),
      outfitIDs: JSON.parse(localStorage.getItem('outfitIDs'))
    };
    if (this.state.outfits === null || this.state.outfitIds === undefined) {
      this.state.outfits = [];
      this.state.outfitIDs = [];
      localStorage.setItem('outfits', JSON.stringify(this.state.outfits));
      localStorage.setItem('outfitIDs', JSON.stringify(this.state.outfitIDs));
    }
  }

  componentDidUpdate() {
    $('#outfitCarousel .carousel-control-prev').css('visibility', 'hidden');
    if (this.state.outfits.length <= 4) {
      $('#outfitCarousel .carousel-control-next').css('visibility', 'hidden');
    } else {
      $('#outfitCarousel .carousel-control-next').css('visibility', 'visible');
    }
  }

  addToOutfit(e, product) {
    e.preventDefault();
    const outfitIDs = this.state.outfitIDs.slice();
    const outfits = this.state.outfits.slice();
    if (!this.state.outfitIDs.includes(product.id)) {
      outfits.push(product);
      outfitIDs.push(product.id);
    }
    localStorage.setItem('outfitIDs', JSON.stringify(outfitIDs));
    localStorage.setItem('outfits', JSON.stringify(outfits));
    this.setState({
      outfits,
      outfitIDs,
    });
  }

  removeFromOutfit(e, product) {
    e.preventDefault();
    console.log('product to be removed from outfit: ', product);
    const outfitIDs = this.state.outfitIDs.slice();
    const outfits = this.state.outfits.slice();
    let idRemoved = false;
    let outfitRemoved = false;
    for (let i = 0; i < outfitIDs.length; i++) {
      if (outfitIDs[i] === product.id) {
        outfitIDs.splice(i, 1);
        idRemoved = true;
      }
      if (outfits[i].id === product.id) {
        outfits.splice(i, 1);
        outfitRemoved = true;
      }
      if (idRemoved && outfitRemoved) {
        break;
      }
    }
    localStorage.setItem('outfits', JSON.stringify(outfits));
    localStorage.setItem('outfitIDs', JSON.stringify(outfitIDs));
    this.setState({
      outfits,
      outfitIDs,
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
            <div className="carousel-inner row w-100 mx-auto oc" role="listbox">
              <div className="carousel-item col-md-3 active">
                <AddToOutfitCard
                  product={this.props.currentProduct}
                  addToOutfit={this.addToOutfit.bind(this)}
                />
              </div>
              {this.state.outfits.map((outfit, i) => (
                <div key={i} className="carousel-item col-md-3">
                  <OutfitCard
                    product={outfit}
                    removeFromOutfit={this.removeFromOutfit.bind(this)}
                    key={i}
                  />
                </div>
              ))}
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
