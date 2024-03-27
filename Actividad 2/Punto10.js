import { administrador } from 'https://cdn.esjs.dev/JYWwDg9gTgLghlABAYygTzDCArAzogEwFNdjEByACxhjFwC4B6R5AgOwDo9iAbYANygc2RGIzZgQLdJggBaPAAEALBwCM6xgGoSIcgCh9RAB6RYCFBDa4YiOARDA2wG1HvREAXkQBvfYgDEAFdcIIRgCHoKe0c2cgAaf0DkKxg3XCIAR7go8gBVZDhcOB41ACYAZgT9AF99IA'

function iniciarSesion(usuario, contraseña) {
  let resultado = false
  if (usuario == administrador.usuario && contraseña == administrador.contraseña) {
    resultado = true
  }
  return resultado
}
