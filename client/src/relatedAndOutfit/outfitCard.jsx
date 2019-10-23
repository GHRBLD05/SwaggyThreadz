import React from 'react';

export default class OutfitCard extends React.Component {
  render() {
    return (
      <div>
        <div className="img-fluid mx-auto d-block outfitCard blank container">
          <div className="d-flex">
            <button
              className="fa fa-plus fa-2x addOutfitButton my-auto mx-auto text-center"
              type="button"
            ></button>
          </div>
        </div>
      </div>
    );
  }
}
