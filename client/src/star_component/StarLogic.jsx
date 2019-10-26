import React from 'react';
import { Fullstar, Emptystar, Halfstar } from './stars.jsx';

export default class StarLogic extends React.Component {
  constructor(props) {
      super(props);
      this.maxRating = 5;
  }

    render() {
        const stars = [];
        const starRating = this.props.starCount;
        const remainder = starRating - Math.floor(starRating);
        var halfSet = false;
        for (let i = 0; i < this.maxRating; i++) {
            if (i < starRating) {
                stars.push(<Fullstar key={i} />);
            } else if (remainder > 0 && !halfSet) {
                stars.push(<Halfstar key={i} />);
                halfSet = true;
            } else {
                stars.push(<Emptystar key={i} />);
            }
        }

        return (
            <div id="avgstars" className="focus">
                {stars}
            </div>
        );
  }
}
