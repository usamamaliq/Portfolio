const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('.closeBtn');
const nav = document.querySelector('.desktop-menu');

menuBtn.addEventListener('click', () => {
  nav.classList.add('menu-show');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('menu-show');
});

document.querySelectorAll('.menu-item').forEach((n) => (
  n.addEventListener('click', () => {
    nav.classList.remove('menu-show');
  })));
