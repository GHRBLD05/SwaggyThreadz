import React from 'react';
import QuestionsModule from './Questions_answers/QuestionsModule.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid maincontainer">
        <div className="row">
          <QuestionsModule />
        </div>
      </div>
    );
  }
}
