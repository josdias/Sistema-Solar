const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 1.5,
  });

  document.getElementById("voltar").addEventListener("click", function() {
    window.history.back();
  });