$(document).ready(function() {
    $('.slider').slick({
      centerMode: true,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
      
    });
  });


  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerIcon = document.querySelector('.hamburger i');
  
    navLinks.classList.toggle('active');
  
    // Toggle icon between bars and X
    if (navLinks.classList.contains('active')) {
      hamburgerIcon.classList.remove('fa-bars');
      hamburgerIcon.classList.add('fa-x');
    } else {
      hamburgerIcon.classList.add('fa-bars');
      hamburgerIcon.classList.remove('fa-x');
    }
  }
  