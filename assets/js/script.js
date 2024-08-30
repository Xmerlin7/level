$( function() {
    $( "#inputCheckIn" ).datepicker();
    $( "#inputCheckOut" ).datepicker();
    $('.level-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
    });
  } );
