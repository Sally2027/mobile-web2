$(document).ready(function () {
  $('.slider').slick({
    centerMode: true,
    slidesToShow: 2, // ✅ default is desktop (769px and up)
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768, // 768px and below
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});




  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }
  
  