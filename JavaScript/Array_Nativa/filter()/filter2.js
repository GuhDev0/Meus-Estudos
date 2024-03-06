const loja = [
    {name:"Ventilador",preco:250.00},
    {name:"TV",preco:1200.00},
    {name:"Guarda-roupa",preco:4000.00},
    {name:"Geladeira",preco:1000.00}
];

function produtoValorMaior(price){
    return price.preco == 1000.00
};

const produtoCaro = loja.filter(produtoValorMaior);

console.log(produtoCaro)