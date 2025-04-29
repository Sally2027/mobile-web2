$(document).ready(function () {
  $('.slider').slick({
    centerMode: true,
    centerPadding: '40px', // Optional: adds padding around the centered slide
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '20px',
          arrows: false
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false
        }
      }
    ]
  });
});




function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}

  
  