$('.navbar-toggler').click(function() {
    $('.navbar-collapse').slideToggle();
  });
  
  // Animate the navbar icons when a user hovers over them
  $('.navbar-nav li a').hover(function() {
    $(this).children('.nav-icon').pulse();
  });
  
  // Fade in the navbar when the page loads
  $('.navbar').fadeIn(300);
  
  // Use a parallax effect to make the navbar appear to move as the user scrolls down the page
  $(window).scroll(function() {
    var scrollY = $(window).scrollTop();
    $('.navbar').css('transform', 'translateY(' + scrollY / 2 + 'px)');
  });