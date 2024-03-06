const produtos =  [
    {
        name:"produto1", value:25
    },
    {
        name:"produto2", value:50
    },
    {
        name:"produto3", value:100
    }
];


//Nessa Function Eu Coloco Dois Parametros, Por que O Reduce vai fazer a soma do Valor
//Anterior(25,50,100) e o valorTotal(parametro que vai receber o valor total da soma)
function valueProdutoTotal(valorAnterior,valorTotal){
    let somaDosValores = valorAnterior + valorTotal.value 
    return   somaDosValores
}

let novoValor = produtos.reduce(valueProdutoTotal, 0)//com o valor 0 eu inicio a soma (0+25=25/ 25+50=75 / 75+100=175)

console.log(novoValor)




const jogos = [
    { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
    { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
    { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
    { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
    { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
    { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
  ];
  
  jogos.forEach((jogo) => {
    console.log(jogo.nome);
  });

