import React from 'react';
import RelatedProduct from './relatedProduct.jsx';

class Related extends React.Component {
  componentDidUpdate() {
    $('#relatedCarousel .carousel-control-prev').css('visibility', 'hidden');
    if (this.props.relatedProducts.length <= 4) {
      $('#relatedCarousel .carousel-control-next').css('visibility', 'hidden');
    } else {
      $('#relatedCarousel .carousel-control-next').css('visibility', 'visible');
    }
  }

  render() {
    const {
      currentProduct,
      relatedProducts,
      productList,
      handleProductClick,
    } = this.props;
    return (
      <div className="productCardWrapper">
        <div className="col-md-12 text-left">
          <h3>Related Products</h3>
        </div>
        <div className="container-fluid">
          <div
            id="relatedCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
            data-type="multi"
            data-wrap="false"
          >
            <div className="carousel-inner row w-100 mx-auto rc" role="listbox">
              {relatedProducts.map((product, i) => (
                <div
                  id={i}
                  key={product.id}
                  className={
                    i === 0
                      ? 'carousel-item col-md-3 active'
                      : 'carousel-item col-md-3'
                  }
                >
                  <RelatedProduct
                    key={product.id}
                    currentProduct={currentProduct}
                    product={product}
                    productList={productList}
                    handleProductClick={handleProductClick}
                  />
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev text-faded"
              href="#relatedCarousel"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-chevron-left fa-lg text-muted"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next text-faded"
              href="#relatedCarousel"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-chevron-right fa-lg text-muted"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Related;
