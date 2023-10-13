// Calcular Entero a partir de un Binario de 4 dígitos.
// Dada una matriz de unos y ceros, convierta el valor binario equivalente a un número entero.

function calcularEntero( matriz ) {
    let suma = 0;
    for (let i = 3; i >= 0; i--) {
        suma = suma + (matriz[i] * (2**i));
    }
    return suma;
}

// Implementacion 1
let binario = [1, 1, 1, 1];
let entero = calcularEntero(binario);
console.log(entero);

binario = [0, 1, 1, 0];
entero = calcularEntero(binario);
console.log(entero);

// Implementacion 2
binario = [1, 0, 0, 1];
entero = parseInt(binario.join(''), 2);
console.log(entero);
