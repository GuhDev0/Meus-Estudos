let produtosValorDolar = [
    {
        nome:'TV',
        value:240
    },
    {
        nome:'VideoGame',
        value:400
    }
]

const precoEmReal = produtosValorDolar.map(p => "Convertendo dolar para real"+  " - " +  p.value * 4.97)
console.log(precoEmReal)