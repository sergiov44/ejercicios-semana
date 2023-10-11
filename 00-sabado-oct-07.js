/** De un listado de personas determinar cuales son los productos que estan entre 10 y 20 dolares */

const frutas = [
    { nombre: 'Mangostino', precio: 34 },       
    { nombre: 'Mora', precio: 17 },      
    { nombre: 'Banano', precio: 11 },        
    { nombre: 'Papaya', precio: 13 },      
    { nombre: 'Lulo', precio: 8 }      
] 

const frutasFiltro = [];

for (let i = 0; i < frutas.length; i++) {
    
    if( frutas[i].precio >= 10 && frutas[i].precio <= 20 ) {
        frutasFiltro.push( frutas[i] );
    }

}

console.log( frutasFiltro );


const filtro = frutas.filter( frutas => frutas.precio >= 10 && frutas.precio <= 20 );
console.log( filtro );