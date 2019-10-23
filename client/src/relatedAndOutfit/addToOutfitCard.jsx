import React from 'react';

export default class AddToOutfitCard extends React.Component {
  render() {
    console.log('addToOutfit components props: ', this.props);
    return (
      <div>
        <div className="img-fluid mx-auto d-block outfitCard blank container">
          <div className="d-flex">
            <button
              className="fa fa-plus fa-2x addOutfitButton my-auto mx-auto text-center"
              type="button"
              onClick={e => {
                console.log('CLICK TRIGGERED');
                this.props.addToOutfit(e, this.props.product);
              }}
            ></button>
          </div>
        </div>
      </div>
    );
  }
}
