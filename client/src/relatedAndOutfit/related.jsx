import React from 'react';
import RelatedProduct from './relatedProduct.jsx';

$('#carouselExample').on('slide.bs.carousel', function(e) {
  const $e = $(e.relatedTarget);
  const idx = $e.index();
  const itemsPerSlide = 4;
  const totalItems = $('.carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    const it = itemsPerSlide - (totalItems - idx);
    for (let i = 0; i < it; i++) {
      // append slides to end
      if (e.direction === 'left') {
        $('.carousel-item')
          .eq(i)
          .appendTo('.carousel-inner');
      } else {
        $('.carousel-item')
          .eq(0)
          .appendTo('.carousel-inner');
      }
    }
  }
});

const Related = ({ relatedProducts }) => (
  <div>
    <div className="col-md-12 text-center">
      <h3>Related Products</h3>
    </div>
    <div className="container-fluid">
      <div
        id="carouselExample"
        className="carousel slide"
        data-ride="carousel"
        data-interval="9000"
      >
        <div
          className="carousel-inner row w-100 mx-auto"
          role="listbox"
          id="ro"
        >
          {relatedProducts.map((product, i) => (
            <div
              className={
                i === 0
                  ? 'carousel-item col-md-3 active'
                  : 'carousel-item col-md-3'
              }
            >
              <RelatedProduct product={product} key={i} />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExample"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-chevron-left fa-lg text-muted"></i>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next text-faded"
          href="#carouselExample"
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

export default Related;
