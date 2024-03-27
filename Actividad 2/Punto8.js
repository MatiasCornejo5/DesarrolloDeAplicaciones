function contarPalabras(texto) {
    let cantidadPalabras = 0
    let longitud = texto.length
    let indice = 0
    while (indice < longitud) {
        if (texto[indice] == " " || (indice+1 == longitud)) {
            cantidadPalabras++
        }
        indice++
    }
    return cantidadPalabras
  }
  