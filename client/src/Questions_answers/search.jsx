import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
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
        <div className="searchBar">
          <input
            type="text"
            value={this.state.term}
            placeholder="Have a question? Search for answers…"
          ></input>
          <div className="searchButton"></div>
        </div>
      </div>
    );
  }
}

export default Search;
