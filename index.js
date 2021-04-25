let palabras = require("./metodos");

let cadena1 = "anita lava la tina";

let palindromo = palabras.palindromo(cadena1);
let largo = palabras.num_Palabras(cadena1);
let letras = palabras.num_Letras(cadena1);
let vocales = palabras.num_Vocales(cadena1);
let consonantes = palabras.num_Consonantes(cadena1);

console.log('La oración "'+ cadena1 +'" '+ palindromo);
console.log("Tiene un largo de "+largo+" palabras");
console.log("Tiene "+ letras +" letras");
console.log("Tiene "+ vocales +" vocales");
console.log("Tiene "+ consonantes +" consonantes");