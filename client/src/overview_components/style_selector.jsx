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
    const { currentStyle } = this.props;
    return (
      <div>
        {currentStyle.photos.map((pic, idx) => (
          <img
            className="styleSelectors"
            src={pic.thumbnail_url}
            alt={currentStyle.name}
            key={idx}
            type="button"
            // onClick={e => {
            //   this.props.handleProductClick(e);
            // }}
          />
        ))}
      </div>
    );
  }
}

export default StyleSelector;
