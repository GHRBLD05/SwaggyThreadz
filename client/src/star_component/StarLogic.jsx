import React from "react";
import { Fullstar, Emptystar, Halfstar } from "./StarName.jsx";

export default class StarLogic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var stars = [];
    var starRating = 4.1;
    var maxRating = 5;
    var Remainder = 1 - (maxRating - starRating);
    for (var i = 0; i < maxRating; i++) {
      if (i < starRating - 1) {
        stars.push(<Fullstar />);
      } else if (Remainder > 0) {
        stars.push(<Halfstar />);
      } else {
        stars.push(<Emptystar />);
      }
    }
    return <div>{stars}</div>;
  }
}
