import React from "react";
import QuestionsModule from "./Questions_answers/QuestionsModule.jsx";
import StarRatingComponent from "/Users/JaeHan/Galvanize/Retail-Product-Webpage/client/src/star_component/StarRatingComponent.jsx";
// import Emptystar from '/Users/JaeHan/Galvanize/Retail-Product-Webpage/client/src/star_component/Emptystar.jsx';
// import Halfstar from '//Users/JaeHan/Galvanize/Retail-Product-Webpage/client/src/star_component/Halfstar.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>test</h1>
        <QuestionsModule />
        <StarRatingComponent />
        {/* <Emptystar />
        <Halfstar /> */}
      </div>
    );
  }
}
