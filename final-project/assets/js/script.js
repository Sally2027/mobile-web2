$(document).ready(function() {
    $('.slider').slick({
      centerMode: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      infinite: true,
      
      
    });
  });

  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }
  
  