document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".reviewSwiper", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    },
  });
});
