import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row question">
          <div className="col-2">
            <p>Q: Question will be here</p>
          </div>
        </div>
        <div className="col-10 helpful">
          <p>Helpful?</p>
          <p>
            <a>Yes</a> |
          </p>
          <a>Add Answer</a>
        </div>
      </div>
    );
  }
}
