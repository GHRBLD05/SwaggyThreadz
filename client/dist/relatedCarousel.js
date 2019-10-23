$(document).ready(() => {
  $('#relatedCarousel').on('slide.bs.carousel', function(e) {
    const itemsPerSlide = 4;
    const totalItems = $('#ro .carousel-item').length;
    const $e = $(e.relatedTarget);
    const idx = $e.index();
    if (idx >= totalItems - itemsPerSlide) {
      $('#relatedCarousel .carousel-control-next').css('visibility', 'hidden');
      $('#relatedCarousel .carousel-control-prev').css('visibility', 'visible');
    } else if (idx === 0) {
      $('#relatedCarousel .carousel-control-prev').css('visibility', 'hidden');
      $('#relatedCarousel .carousel-control-next').css('visibility', 'visible');
    } else {
      $('#relatedCarousel a').css('visibility', 'visible');
    }
  });
});
