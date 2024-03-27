function imc(pesoEnKg, alturaEnMts) {
    let resultado 
    resultado = pesoEnKg / (alturaEnMts**2)
    return resultado.toFixed(2) 
  }
  