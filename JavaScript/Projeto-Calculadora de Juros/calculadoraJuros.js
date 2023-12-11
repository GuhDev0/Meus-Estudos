import EntradaDados from 'readline-sync'

console.log("Calculadora de Juros \n")

let dezPorcento = 0.1;
let cincoPorcento = 0.05;
let valorDevido = EntradaDados.question("Informe o Valor Devido: ")

if(valorDevido > 0){
    let  diasPerdidos = EntradaDados.question("Informe Quantos Dias Passaram desde do Vencimento: ");
    
    if(diasPerdidos == 0 ){
        console.log("Perfeito, Voce Esta em Dia!");
    }
    else if(diasPerdidos > 15){
        let juros = (valorDevido * dezPorcento) + Number(valorDevido);
        console.log(`Valor Original da Divida: R$${valorDevido}`);
        console.log(`Dias Atrasados: ${diasPerdidos}`);
        console.log(`Taxa de Juros: 10%`)
        console.log(`Valor total com juros: ${juros}`)
    }
    else{
        let juros = (valorDevido * cincoPorcento) + Number(valorDevido) 
        console.log(`Valor Original da Divida: R$${valorDevido}`);
        console.log(`Dias Atrasados: ${diasPerdidos}`);
        console.log(`Taxa de Juros: 5%`)
        console.log(`Valor total com juros: ${juros}`)
    }
}
else{
    console.log("O Valor da Divida deve Ser Maior que Zero!");
}

 



