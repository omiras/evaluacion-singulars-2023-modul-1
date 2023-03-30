'use strict';
const modal = document.querySelector('.modal');
const navMenu = document.querySelector('.nav-menu-mobile');
const hamburgerMenu = document.querySelectorAll('.menu');

console.log(hamburgerMenu);

hamburgerMenu.forEach(item => {
  item.addEventListener('click', displayMobileMenu);
});
function displayMobileMenu() {
  modal.classList.toggle('hidden');
  navMenu.classList.toggle('show-nav-menu-mobile');
  document.body.classList.toggle('no-overflow');
  for (const btn of hamburgerMenu) {
    btn.classList.toggle('hidden');
  }
}
