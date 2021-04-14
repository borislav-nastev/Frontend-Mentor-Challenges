const burgerBtn = document.querySelector('.burger');
const navMenu = document.querySelector('.nav_items');

burgerBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  burgerBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
}
