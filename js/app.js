// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
      delay: 2000
  },

});
const menuBtn = document.querySelector('.navbar-menu__button');
const menu = document.querySelector('.navbar-links');
const close = document.querySelector('.navbar-close__button');

menuBtn.addEventListener('click', () => {
    menu.classList.add('active')
})

close.addEventListener('click', () => {
    menu.classList.remove('active')
})

const accardion = document.querySelectorAll('.question-contentbx');

for(let i = 0; i < accardion.length; i++){
  accardion[i].addEventListener('click', () => {
    accardion[i].classList.toggle('active')
  })
}