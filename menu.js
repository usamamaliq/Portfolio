const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.desktop-menu');

menuBtn.addEventListener('click', () => {
  nav.classList.add('menu-show');
});


