// Home effect
const homeEffect = document.querySelector('.home__effect');

homeEffect.classList.add('open');
setTimeout(() => {
  homeEffect.style.display = 'none';
}, 1500);

// Navbar toggle
const navbar = document.querySelector('.navbar');
const NavbarToggle = document.querySelector('.navbar__toggle');
NavbarToggle.addEventListener('click', () => navbar.classList.toggle('open'));
// メニューをクリックして移動したらメニューがdisplay:none
navbar.addEventListener('click', () => navbar.classList.remove('open'));
