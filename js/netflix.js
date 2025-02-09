/*=============== SWIPER MOVIE ===============*/
let swiperMovie = new Swiper(".movie-swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 24,

  breakpoints: {
    440: {
      slidesPerView: "auto",
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

/*=============== SWIPER NEW ===============*/
let swiperNew = new Swiper(".new-swiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    440: {
      centeredSlides: false,
      slidesPerView: "auto",
    },
    768: {
      centeredSlides: false,
      slidesPerView: 4,
    },
    1200: {
      centeredSlides: false,
      slidesPerView: 5,
    },
  },
});
