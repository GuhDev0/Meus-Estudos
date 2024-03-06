//Formato para real
const price = 2865.79;


let brReal = new Intl.NumberFormat ('pt-BR', {
    style: 'currency', 
    currency: 'BRL',
    
});

//Formatado para Dolar
let usDolar = new Intl.NumberFormat('en-US',{
    style:"currency",
    currency:'USD'
})
//formando para porcentagem

let percentual = parseInt(10);

let formtadoPercentual = new Intl.NumberFormat('pt-br',{style:'percent'})



console.log(brReal.format(price))// Output "2.865,79 Reais brasileiros"
console.log(usDolar.format(price))
console.log(formtadoPercentual.format(percentual))


//SINTAXE

//Intl.NumberFormat('locales',{option})

//locales['pt-br','en-US']
//option =['STYLE''localMatcher''currency''currencyDisplay']