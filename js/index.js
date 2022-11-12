const check = document.getElementById('check')
const background = document.getElementById('background')
const burger = document.getElementById('burger')
const logoClose = document.getElementById('logoClose')
const navMenu = document.getElementById('nav-menu')

check.addEventListener('click', () => {
  if (check.checked === false) {
    burger.src = 'https://joorkar.github.io/heimdal-green/assets/burger-menu.svg'
    logoClose.src = 'https://joorkar.github.io/heimdal-green/assets/logo-desktop.svg'
    navMenu.style.display = 'none'
  } else {
    burger.src = 'https://joorkar.github.io/heimdal-green/assets/burger-menu-close.svg'
    logoClose.src = 'https://joorkar.github.io/heimdal-green/assets/logo-mobile-close.svg'
    navMenu.style.display = 'flex'
  }
})