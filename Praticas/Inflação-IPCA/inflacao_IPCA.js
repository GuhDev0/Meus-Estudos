// Criar coleção
import entradaDados from 'readline-sync';

let listSalario = [
    { ano: 2010, salario: 510.00 },
    { ano: 2011, salario: 545.00 },
    { ano: 2012, salario: 622.00 },
    { ano: 2013, salario: 678.00 },
    { ano: 2014, salario: 724.00 },
    { ano: 2015, salario: 788.00 },
    { ano: 2016, salario: 880.00 },
    { ano: 2017, salario: 937.00 },
    { ano: 2018, salario: 954.00 },
    { ano: 2019, salario: 998.00 },
    { ano: 2020, salario: 1045.00 }
]



let escolhaSalario = "1 - Listar os salarios minimos de 2010 a 2020"
let escolhaIPCA = "2 - Listar o Indice IPCA de 2010 a 2020"
let escolhaComparacao = "3 - Comparação entre  o percentual de Aumento salarial e o IPCA"



console.log("Escolha uma das Alternativas: \n")
console.log(escolhaSalario)
console.log(escolhaIPCA)
console.log(escolhaComparacao)
console.log("\n")
let escolha = entradaDados.question(" Digite o numero da sua Escolha: ")

if (Number(escolha) == 1) {
    console.log("opção Escolhida: 1 \n")
    for (let dadosSalario of listSalario) {
        let ano = dadosSalario.ano
        let salario = dadosSalario.salario
        let salarioFormatado = salario.toFixed(2).replace(".",",")
        
        console.log(`Ano:${ano}`)
        console.log(`Salario: ${salarioFormatado} \n`)

    }

} else if (Number(escolha) == 2) {
    console.log("opção Escolhida: 2 \n")

} else if (Number(escolha) == 3) {
    console.log("opção Escolhida: 3 \n")
} else {

    console.log("opção Invalida")
}


