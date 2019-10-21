$(document).ready(() => {
  $('#relatedCarousel').on('slide.bs.carousel', function(e) {
    const $e = $(e.relatedTarget);
    const idx = $e.index();
    const itemsPerSlide = 4;
    console.log('slides: ', $('#ro .carousel-item'));
    const totalItems = $('#ro .carousel-item').length;
    console.log('totalItems: ', totalItems);

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      const it = itemsPerSlide - (totalItems - idx);
      for (let i = 0; i < it; i++) {
        // append slides to end
        if (e.direction === 'left') {
          $('#ro .carousel-item')
            .eq(i)
            .appendTo('#ro.carousel-inner');
        } else {
          $('#ro .carousel-item')
            .eq(0)
            .appendTo('#ro.carousel-inner');
        }
      }
    }
  });
});
