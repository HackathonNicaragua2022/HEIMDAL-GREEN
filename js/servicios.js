const diseño = document.getElementById('diseño')
const diseño3 = document.getElementById('diseño-3')
const instalacion = document.getElementById('instalacion')
const instalacion3 = document.getElementById('instalacion-3')
const mantenimiento = document.getElementById('mantenimiento')
const mantenimiento3 = document.getElementById('mantenimiento-3')

diseño.addEventListener('click', () => {
  if (diseño.checked === false) {
    diseño3.style.display = 'none'
  } else {
    diseño3.style.display = 'flex'
  }
})
instalacion.addEventListener('click', () => {
  if (instalacion.checked === false) {
    instalacion3.style.display = 'none'
  } else {
    instalacion3.style.display = 'flex'
  }
})
mantenimiento.addEventListener('click', () => {
  if (mantenimiento.checked === false) {
    mantenimiento3.style.display = 'none'
  } else {
    mantenimiento3.style.display = 'flex'
  }
})