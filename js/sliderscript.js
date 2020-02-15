var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  grabCursor: true,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "slide",
  mousewheelControl: 1,
  mousewheel: true
});
