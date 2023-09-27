const swiper0 = new Swiper('.swiper-main', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  fadeEffect: {
    crossFade: true,
  }
});