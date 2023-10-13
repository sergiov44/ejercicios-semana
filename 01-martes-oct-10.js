// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2
// Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30

let peso = parseFloat(prompt("Ingrese su peso en kilos:"));
let altura = parseFloat(prompt("Ingrese su altura en metros: "));

let bmi = peso / altura**2;
console.log(bmi);

switch( true ){
    case bmi < 18.5:
        console.log("Bajo de peso")
        break;
    case bmi >= 18.5 && bmi < 25:
            console.log("Normal")
        break;
    case bmi >= 18.5 && bmi < 25:
        console.log("Sobrepeso")
        break;
    case bmi <= 25:
        console.log("Obeso")
        break;
    default:
        console.log( "Ingrese valores correctos para el calculo" );
}

