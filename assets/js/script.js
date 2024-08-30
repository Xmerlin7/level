$( function() {
    $( "#inputCheckIn" ).datepicker();
    $( "#inputCheckOut" ).datepicker();
    $('.level-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    });
  } );
