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


function encontrarNombresIguales(listaNombres){
    const nombresIguales = [];

    for (let i = 0; i < listaNombres.length; i++) {
        const nombre = listaNombres[i].name;
        const encontrados = nombresIguales.find((elemento) => {
            return elemento.nombre == nombre;
        });
        if(encontrados) {
            encontrados.cantidad = encontrados.cantidad + 1;
            
        } else {
            const persona = {
                nombre,
                cantidad: 1
            };
            nombresIguales.push(persona);
        }
    }
    return nombresIguales;
}

const repetidos = encontrarNombresIguales( values );

for( let i = 0; i < repetidos.length; i++ ) {
    if( repetidos[i].cantidad > 1 ) {
        console.log(`${repetidos[i].nombre} esta repetido ${repetidos[i].cantidad} veces`);
    }
}