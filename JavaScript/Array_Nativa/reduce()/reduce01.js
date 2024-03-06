const itemsVendidos = [
    {name:"produto1", ativo: true , value: 2},
    {name:"produto2", ativo: false , value: 0},
    {name:"produto3", ativo: true , value: 5},
    {name:"produto4", ativo: false , value: 0}
];


function somaDosValores(valorAnterior,valorAtual){

    const novoValor = valorAnterior + valorAtual.value    
    return novoValor
}
function valorVendido(vendido){
    return   vendido.ativo == true
}
const produtoVendido = itemsVendidos.filter(valorVendido)

const valorReduzido = itemsVendidos.reduce(somaDosValores,0)

console.log(valorReduzido)
console.log(produtoVendido.splice(0,2)) 