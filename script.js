$(document).ready(() => {
  const slickOptions = {
    autoplay: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Previous</button>;',
  };

  $(".slider").slick(slickOptions);
});

// $(document).ready(function () {
//   $(".slide").slick({
//     autoplay: true,
//     dots: false,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   });
// });
