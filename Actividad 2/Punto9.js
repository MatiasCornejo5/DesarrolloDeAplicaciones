function esSegura(contraseña) {
    let resultado = false
    if (contraseña.length >= 8 && contieneNumero(contraseña)) {
        resultado = true
    }
    return resultado
  }
  
  function contieneNumero(contraseña) {
     let contiene = false
     let longitud = contraseña.length
     let indice = 0
     while (indice < longitud && !contiene) {
        contiene = !isNaN(contraseña[indice])
        indice++
     }
     return contiene
  }