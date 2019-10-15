import React from 'react';
import Related from './related.jsx';
import Outfit from './outfit.jsx';

export default class relatedOutfitContainer extends React.Component {
  render() {
    return (
      <div>
        <Related />
        <Outfit />
      </div>
    );
  }
}
