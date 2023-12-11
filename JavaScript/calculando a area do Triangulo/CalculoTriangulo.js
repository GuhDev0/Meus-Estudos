import EntradaDados from 'readline-sync';

console.log("Area do Tringulo \n");

let base = EntradaDados.question("Informe a Base:");
let altura = EntradaDados.question("Informe a Altura:");

let area = (base * altura) / 2;

console.log("A Area do Triangulo é: "+area )