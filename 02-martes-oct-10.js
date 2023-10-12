// A partir de la lista determinar:
// Cantidad de hombres y mujeres.
// Promedio de edades de hombres y mujeres.
// Cuántas personas se llaman igual.

const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female'},
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
];

const hombres = [];
function determinarCantidadHombres() {
    for (let i = 0; i < values.length; i++) {
        if( values[i].gender == 'male' ){
            hombres.push( values[i] );
        }
    }
    
    console.log( `Hay un total de ${ hombres.length } hombres`);
}
determinarCantidadHombres();

const mujeres = [];
function determinarCantidadMujeres() {
    for (let i = 0; i < values.length; i++) {
        if( values[i].gender == 'female' ){
            mujeres.push( values[i] );
        }
    }
    
    console.log( `Hay un total de ${ mujeres.length } mujeres`);
}
determinarCantidadMujeres();

function calcularPromedioHombres() {
    let sumaHombres = 0;
    for (let i = 0; i < hombres.length; i++) {
        sumaHombres = sumaHombres + hombres[i].age;
    }
    let promedioHombres = sumaHombres / hombres.length;
    console.log( `El promedio de edad de hombres es ${ promedioHombres }` );
}
calcularPromedioHombres();

function calcularPromedioMujeres() {
    let sumaMujeres = 0;
    for (let i = 0; i < mujeres.length; i++) {
        sumaMujeres = sumaMujeres + mujeres[i].age;
    }
    let promedioMujeres = sumaMujeres / mujeres.length;
    console.log( `El promedio de edad de mujeres es ${ promedioMujeres.toFixed(1) }` );
}
calcularPromedioMujeres();





const nombresIguales = [];
let temp = values[0];

for (let i = 0; i < values.length; i++) {
    if(nombresIguales[i] == values[i].name) {
        nombresIguales.push({name: i + 1});
    }
}
console.log( nombresIguales );


// if( list == undefined || list.length == 0  ) {
//     throw new Error( 'La lista esta vacia o esta indefinida' );
// }


// let temp = list[ 0 ];

// for( let i = 0; i < list.length; i++ ) {
//     if( list[ i ] > temp ) {
//         temp = list[ i ];
//     }
// }

// return temp ;