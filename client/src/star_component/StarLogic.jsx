import React from 'react';
import { Fullstar, Emptystar, Halfstar } from './StarName.jsx';

export default class StarLogic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let stars = [];
    let starRating = 4.1;
    let maxRating = 5;
    let Remainder = 1 - (maxRating - starRating);
    for (let i = 0; i < maxRating; i++) {
      if (i < starRating - 1) {
        stars.push(<Fullstar key={i} />);
      } else if (Remainder > 0) {
        stars.push(<Halfstar key={i} />);
      } else {
        stars.push(<Emptystar key={i} />);
      }
    }
    return <div>{stars}</div>;
  }
}
