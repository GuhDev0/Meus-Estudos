import entradaDados from 'readline-sync';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       import EntradaDados from 'readline-sync'

console.log("Conversor de Celsius Para Kevin \n"); 

let C = entradaDados.question("Informe o Valor em Celsius:");

let K =  Number(C) + 273.15;

console.log(C+"C equivale a "+K+"K" )