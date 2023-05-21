let burgerMenu;
let lineBurger;
let headerNav;
let HTMLBody;

export function burger() {
  burgerMenu = document.querySelector('.hamburger');
  lineBurger = document.querySelector('.hamburger__line');
  headerNav = document.querySelector('.nav-main-header');
  HTMLBody = document.body;

  burgerMenu.addEventListener('click', showNavigation);
  headerNav.addEventListener('click', closeMenu);
}

function showNavigation() {
  lineBurger.classList.toggle('animate');
  headerNav.classList.toggle('nav-main-header_active');
  HTMLBody.classList.toggle('overlay-not');

}

function closeMenu() {
  if (headerNav.classList.contains('nav-main-header_active')) {
    lineBurger.classList.remove('animate');
    headerNav.classList.remove('nav-main-header_active');
    HTMLBody.classList.remove('overlay-not');
  }
}