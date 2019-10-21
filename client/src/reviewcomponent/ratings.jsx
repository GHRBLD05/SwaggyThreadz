import React from 'react';
import StarRating from '../star_component/StarRating.jsx';
import Emptystar from '../star_component/Emptystar.jsx';
import Halfstar from '../star_component/Halfstar.jsx';

export default class Ratings extends React.Component {
  render() {
    return (
      <div id="ratings" className="col-md-4">
        <h1>Ratings</h1>
        <StarRating />
        <Emptystar />
        <Halfstar />
      </div>
    );
  }
}
