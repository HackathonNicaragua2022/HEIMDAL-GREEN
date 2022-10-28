const check = document.getElementById('check')
const background = document.getElementById('background')
const burger = document.getElementById('burger')
const logoClose = document.getElementById('logoClose')
const navMenu = document.getElementById('nav-menu')

check.addEventListener('click', function () {
  if (check.checked === false) {
    background.style.backgroundColor = '#4EA539';
    burger.src = 'https://joorkar.github.io/heimdal-green/assets/burger-menu.svg'
    logoClose.src = 'https://joorkar.github.io/heimdal-green/assets/logo-mobile.svg'
    navMenu.style.display = 'none'
  } else {
    background.style.backgroundColor = 'transparent';
    burger.src = 'https://joorkar.github.io/heimdal-green/assets/burger-menu-close.svg'
    logoClose.src = 'https://joorkar.github.io/heimdal-green/assets/logo-mobile-close.svg'
    navMenu.style.display = 'flex'
  }
})

