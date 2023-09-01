$(document).ready(function () {
  $('.carousel1').owlCarousel({
    items: 3,
    margin:20,
    responsiveClass:true,
    autoHeight: true,
    responsive:{
        0:{
            items:1,
        },
        725:{
            items:2,
            
        },
        1100:{
            items:3,

        }
      }
  });

  $('.patents-current-year__slider__btn').click(function () {
    $('.carousel1').trigger('next.owl.carousel');
  });
});
