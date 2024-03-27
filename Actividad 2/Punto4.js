function esPrimo(numero) {
    let cantidadDivisores = 1 //todo num es divisible por 1
    let resultado = false
    for (let indice = 2; indice <= numero; indice++) {
      if (numero % indice == 0) {
        cantidadDivisores++
      }
    }
    if (cantidadDivisores < 3) {
      resultado = true
    }
    return resultado
  }
  