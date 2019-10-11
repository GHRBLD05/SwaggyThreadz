import React, { Component } from 'react';

export default class AddToCart extends Component {
  render() {
    return (
      <div>
        <input className="button" type="button" value="Add To Cart" />
        <p>
          this is where the select tag will go, w3 schools has a little func to
          get 1-100 qty without having to declare a value explicitly.
        </p>
      </div>
    );
  }
}
