function esMultiplo(numero) {
    let resultado = false
    if (esDivisible(numero, 3) && esDivisible(numero, 15)) {
        resultado = true
    }
    return resultado
  }
  