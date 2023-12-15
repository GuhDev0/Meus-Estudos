import EntradaDados  from 'readline-sync';

console.log("Calculadora de Soma entre x e y :")

let x = EntradaDados.question("Informe um Numero: ")
let y = EntradaDados.question("Informe Segundo Numero: ")

let resultado = Number(x) + Number(y);

console.log( x+ " + "+y+" = "+resultado);