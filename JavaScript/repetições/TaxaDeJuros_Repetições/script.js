let capital_Emprestado = 3000;
let taxaDeJuros = 0.2; 

let contador = 1 ;
let parcelas_totais = 5;

while(contador <= parcelas_totais){
    let numero_parcelas = contador;
    let juros_emprestimo = capital_Emprestado * taxaDeJuros * numero_parcelas;
    console.log(`A Taxa de Juros no periodo de ${numero_parcelas} Mes(es) é de R$${juros_emprestimo},00`);
    contador++;
}