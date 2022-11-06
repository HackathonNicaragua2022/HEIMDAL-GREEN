const $form = document.getElementById('form')
const $buttonMailto = document.getElementById('correo')

function handleSubmit(e) {
  e.preventDefault()
  const form = new FormData($form)
  console.log(form.get('nombre'));
  $buttonMailto.setAttribute('href', `mailto:heimdalgreen@gmail.com?subject=Nombre: ${form.get('nombre')} Correo: ${form.get('email')}&body=${form.get('celular')} 
  ${form.get('servicios')} 
  ${form.get('ciudad')} 
  ${form.get('zona')}`)
  $buttonMailto.click()

}

$form.addEventListener('submit', handleSubmit);
