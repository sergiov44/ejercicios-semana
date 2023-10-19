// Amplia la funcionalidad de la función suma()
// La siguiente función es capaz de sumar dos números. ¿qué cambios deben hacerse a la misma para que sea capaz de sumar 2 o más números?

function suma(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

const resultado = suma(5, 6, 7, 12);
console.log(`La suma de los números en el arreglo es ${resultado}`);