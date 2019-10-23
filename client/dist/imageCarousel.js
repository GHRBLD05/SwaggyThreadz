$(document).ready(() => {
  $('#my-carousel').on('slide.bs.carousel', function(e) {
    const itemsPerSlide = 1;
    const totalItems = $('#my-carousel .carousel-item').length;
    const $e = $(e.relatedTarget);
    const idx = $e.index();
    // console.log(idx);
    if (idx >= totalItems - itemsPerSlide) {
      // console.log('hide-next: ', idx, ' >= ', totalItems - itemsPerSlide);
      $('#my-carousel .carousel-control-next').css('visibility', 'hidden');
      $('#my-carousel .carousel-control-prev').css('visibility', 'visible');
    } else if (idx === 0) {
      // console.log('hide-prev: ', idx);
      $('#my-carousel .carousel-control-prev').css('visibility', 'hidden');
      $('#my-carousel .carousel-control-next').css('visibility', 'visible');
    } else {
      // console.log('show-both: ', idx);
      $('#my-carousel a').css('visibility', 'visible');
    }
  });
});
