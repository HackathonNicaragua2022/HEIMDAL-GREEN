const checkBurger = document.getElementById('check')
const background = document.getElementById('background')
const burger = document.getElementById('burger')
const logoClose = document.getElementById('logoClose')
const navMenu = document.getElementById('nav-menu')

checkBurger.addEventListener('click', function () {
  if (checkBurger.checked === false) {
    background.style.backgroundColor = '#4EA539';
    burger.src = 'heimdal-green/assets/burger-menu.svg'
    logoClose.src = 'heimdal-green/assets/logo-mobile.svg'
    navMenu.style.display = 'none'
  } else {
    background.style.backgroundColor = 'transparent';
    burger.src = 'heimdal-green/assets/burger-menu-close.svg'
    logoClose.src = 'heimdal-green/assets/logo-mobile-close.svg'
    navMenu.style.display = 'flex'
  }
})

