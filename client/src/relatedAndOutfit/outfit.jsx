import React from 'react';
import OutfitCard from './outfitCard.jsx';

export default class Outfit extends React.Component {
  render() {
    return (
      <div>
        <h5>Your Outfit</h5>
        <OutfitCard />
      </div>
    );
  }
}
