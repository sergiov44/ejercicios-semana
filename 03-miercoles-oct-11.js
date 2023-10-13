// A partir de la siguiente lista

// 1. Obtener una lista con los nombres de los productos mas baratos, en el entendido que se considera barato un producto que no supera los 5 dólares.
// 2. Calcular el costo promedio de todos productos de la lista cuyo precio y cantidad disponible es mayor a cero
// 3. Calcular el costo total del inventario.


let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

function encontrarProductosBaratos(){
    let productosBaratos = [];
    for (let i = 0; i < products.length; i++) {
        if(products[i].precio < 5) {
            productosBaratos.push(products[i].nombre);
        }
    }
    console.log(`Los productos de menos de 5 son: ${productosBaratos}`);
}
encontrarProductosBaratos();

function calcularPromedioMayoresCero(){
    let suma = 0;
    for (let i = 0; i < products.length; i++) {
        if(products[i].precio > 0){
            suma = suma + products[i].precio;
        }
    }
    let promedio = suma/products.length;
    console.log(`El promedio de precios de los productos de más de cero es: ${promedio.toFixed(1)}`);
}
calcularPromedioMayoresCero();

function calcularCostoInventario(){
    let suma = 0;
    for (let i = 0; i < products.length; i++) {
        let costoInventario = [products[i].precio * products[i].cantidad];
        costoInventario.forEach(costoTotalProducto => {
            suma += costoTotalProducto;
        });
    }
    console.log(`El costo total del inventario es: ${suma}`);
}
calcularCostoInventario();

