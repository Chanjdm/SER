

document.addEventListener("DOMContentLoaded", function () {
  // Inicializa el Swiper
  var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Recuperar la posición del slider desde el almacenamiento local
  var savedSlideIndex = localStorage.getItem("currentSlideIndex");

  // Navegar a la diapositiva guardada (si está disponible)
  if (savedSlideIndex !== null) {
    TrandingSlider.slideTo(parseInt(savedSlideIndex), 0, false);
  }

  // Manejar el clic en los enlaces
  var imageLinks = document.querySelectorAll(".image-link");

  imageLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      // Prevenir el comportamiento predeterminado del enlace
      e.preventDefault();

      // Obtener la URL del enlace
      var linkUrl = e.currentTarget.getAttribute("href");

      // Guardar la posición actual del slider en el almacenamiento local
      localStorage.setItem("currentSlideIndex", TrandingSlider.activeIndex);

      // Navegar a la URL
      window.location.href = linkUrl;
    });
  });
});









