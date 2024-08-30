$(function() {
  // Initialize datepickers with custom options
  $("#inputCheckIn").datepicker({
      dateFormat: "yy-mm-dd",
      minDate: new Date()
  });
  $("#inputCheckOut").datepicker({
      dateFormat: "yy-mm-dd",
      minDate: new Date()
  });

  // Initialize Slick Carousel with additional options
  $('.level-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: false,
      arrows:true,
      autoplay: true, // Automatically slide to the next slide
      autoplaySpeed: 3000 // Set autoplay interval in milliseconds
  });

  // Log initialization and handle errors
  $('.level-slider').on('init', function(event, slick) {
      console.log('Slick initialized:', slick);
  }).on('initError', function(event, slick, error) {
      console.error('Slick initialization error:', error);
  });
});