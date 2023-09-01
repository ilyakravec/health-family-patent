$(document).ready(function () {
    $('.carousel2').owlCarousel({
      items: 6,
      margin:20,
      responsive : {
        0 : {
          items:2
        },
        450:{
          items:3
        },
        800:{
          items:5 
        },
        1500:{
          items:6
        }
    }
    });


    $('.patents-for-years__slider__btn').click(function () {
      $('.carousel2').trigger('next.owl.carousel');
    });
  });