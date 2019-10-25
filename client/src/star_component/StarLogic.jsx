import React from 'react';
import { Fullstar, Emptystar, Halfstar } from './StarName.jsx';

export default class StarLogic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stars = [];
    const starRating = this.props.starCount;
    const maxRating = 5;
    const Remainder = 1 - (maxRating - starRating);
    for (let i = 0; i < maxRating; i++) {
      if (i < starRating) {
        stars.push(<Fullstar />);
      } else if (Remainder > 0) {
        stars.push(<Halfstar key={i} />);
      } else {
        stars.push(<Emptystar key={i} />);
      }
    }
    return <div className="mt-3 ml-2">{stars}</div>;
  }
}
