// ¿Va a sobrevivir?
// Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.
// Responda a la pregunta y devuelva true si es así, de lo contrario false

let dragones = 2;
let condicion = dragones * 2;
let balas = parseFloat(prompt("¿Cuántas balas llevará el héroe?"));

switch(true) {
    case condicion <= balas:
        console.log("El héroe sobrevivirá.");
        break;
    default:
        console.log("El héroe no sobrevivirá.");
}