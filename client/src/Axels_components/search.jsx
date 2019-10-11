import React from 'react';

class Search extends React.Component {
  constructor(props) {
    this.state = {
      term: '',
    };
  }

  onChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h3>Questions and Answers</h3>
        <br></br>
        <input
          type="text"
          value={this.state.term}
          placeholder="Have a question? Search for answers…"
        ></input>
      </div>
    );
  }
}

export default Search;
