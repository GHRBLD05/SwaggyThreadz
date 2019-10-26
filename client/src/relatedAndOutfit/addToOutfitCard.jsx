import React from 'react';

export default class AddToOutfitCard extends React.Component {
  render() {
    return (
      <div
        className="outfitCard container"
        role="button"
        tabIndex="-1"
        onKeyPress={e => {
          this.props.addToOutfit(e, this.props.product);
        }}
        onClick={e => {
          this.props.addToOutfit(e, this.props.product);
        }}
      >
        <div className="row h-100 text-center">
          <div className=" col-12 my-auto">
            <div className="fa fa-plus fa-2x"></div>
            <h4 className="addToOutfitTitle">Add To Outfit</h4>
          </div>
        </div>
      </div>
    );
  }
}
