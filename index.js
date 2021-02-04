$(function () {
  $('.slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left fa-3x fleche fleche-gauche-offre"></i>',
    nextArrow: '<i class="fas fa-chevron-right fa-3x fleche"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 545,
        settings: "unslick"
      }
    ]
  });

});
