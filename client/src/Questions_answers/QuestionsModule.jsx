import React from 'react';
import Search from './search.jsx';

class QuestionsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default QuestionsModule;
