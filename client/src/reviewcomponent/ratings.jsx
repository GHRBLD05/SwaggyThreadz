import React from "react";
import StarLogic from "../star_component/StarLogic.jsx";

export default class Ratings extends React.Component {
  render() {
    // console.log(ConnectedProductBreakdown);
    return (
      <div id="ratings" className="col-md-4">
        <h1>Ratings</h1>

        {<StarLogic />}
      </div>
    );
  }
}
