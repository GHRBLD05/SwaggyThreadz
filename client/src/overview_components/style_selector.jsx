import React, { Component } from 'react';

const makeThumbnails = () => {
  const stylePhotos = this.state.stylesArray;
  for (let i = 0; i < stylePhotos.length; i++) {
    <img src={stylePhotos[i].thumbnail_url} alt="style thumbnail" />;
  }
};

class StyleSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: props.currentProduct,
      currentStyle: props.currentStyle,
      currStylePhotos: props.currentStyle.photos,
      stylesArray: props.stylesArray,
    };
  }

  render() {
    return (
      <div>
        {console.log('state', this.state)}
        <p>
          thumbnail for each style, appearing in rows of 4. current selection
          indicated by checkmark. product name to render above thumbnails, which
          will be clickable, product has at least one style. only one style can
          be selected at once and one must be selected at all times.
        </p>
        <img
          src={this.state.currStylePhotos[0].thumbnail_url}
          alt="first thumbnail"
          className="rounded-circle"
        />
        <img
          src={this.state.currStylePhotos[1].thumbnail_url}
          alt="second thumbnail"
          className="rounded-circle"
        />
        <img
          src={this.state.currStylePhotos[3].thumbnail_url}
          alt="third thumbnail"
          className="rounded-circle"
        />
        <img
          src={this.state.currStylePhotos[4].thumbnail_url}
          alt="fourth thumbnail"
          className="rounded-circle"
        />
        <br></br>
        <img
          src={this.state.currStylePhotos[5].thumbnail_url}
          alt="second line thumbnail"
          className="rounded-circle"
        />
      </div>
    );
  }
}

export default StyleSelector;
{
  /* <img src="" /> */
}
