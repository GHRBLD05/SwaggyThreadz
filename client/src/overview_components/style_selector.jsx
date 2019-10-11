import React, { Component } from 'react';

export default class StyleSelector extends Component {
  render() {
    return (
      <div>
        <p>
          thumbnail for each style, appearing in rows of 4. current selection
          indicated by checkmark. product name to render above thumbnails, which
          will be clickable, product has at least one style. only one style can
          be selected at once and one must be selected at all times.
        </p>
      </div>
    );
  }
}
