import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  }

  handleInputChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    console.log('zee props', this.props);

    return (
      <nav className="navbar navbar-dark bg-dark">
        <h3 className="navbar-brand">Retail FEC</h3>
        <form
          className="form-inline"
          value={this.state.value}
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={e => {
              this.handleInputChange(e);
            }}
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}
