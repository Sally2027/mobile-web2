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


  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('active');
      const hamburgerIcon = document.querySelector('.hamburger i');
      hamburgerIcon.classList.add('fa-bars');
      hamburgerIcon.classList.remove('fa-x');
    });
  });