const checkBurger = document.getElementById('check')
const background = document.getElementById('background')
const burger = document.getElementById('burger')
const logoClose = document.getElementById('logoClose')
const navMenu = document.getElementById('nav-menu')

checkBurger.addEventListener('click', function () {
  if (checkBurger.checked === false) {
    background.style.backgroundColor = '#4EA539';
    burger.src = '../assets/burger-menu.svg'
    logoClose.src = '../assets/logo-mobile.svg'
    navMenu.style.display = 'none'
  } else {
    background.style.backgroundColor = 'transparent';
    burger.src = '../assets/burger-menu-close.svg'
    logoClose.src = '../assets/logo-mobile-close.svg'
    navMenu.style.display = 'flex'
  }
})

