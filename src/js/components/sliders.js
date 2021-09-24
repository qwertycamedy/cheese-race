if(document.querySelector('.suppliers__slider')) {
  new Swiper('.suppliers__slider', {
    pagination: {
      el: '.suppliers__slider-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 23
      },
      766: {
        slidesPerView: 2,
        spaceBetween: 23
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 23
      }
    }
  });
}

if(document.querySelector('.banner__slider')) {
  new Swiper('.banner__slider', {
    slidesPerView: 1,
    spaceBetween: 23,
    pagination: {
      el: '.banner__slider-pagination',
      clickable: true,
    },
  });
}

if(document.querySelector('.product__card-slider')) {
  new Swiper('.product__card-slider', {
    grabCursor: true,
    spaceBetween: 23,
    pagination: {
      el: '.product__card-slider-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.product__card-slider-arrow-next',
      prevEl: '.product__card-slider-arrow-prev',
    },
  });
}