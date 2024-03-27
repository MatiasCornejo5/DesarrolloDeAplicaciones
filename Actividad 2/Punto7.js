function contieneABC(texto) {
    let resultado = false
    for (let index = 0; index < texto.length; index++) {
        if (texto[index] == 'a') {
            if (texto[index+1] == 'b') {
                if (texto[index+2] == 'c') {
                    resultado = true
                }
            }
        }
    }
    return resultado
  }