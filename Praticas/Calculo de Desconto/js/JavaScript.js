let res = window.document.getElementsByTagName("p")[0]
let p1 = window.document.getElementsByTagName('p')[1]
let p2 = window.document.getElementsByTagName('p')[2]

function clicar() {

    let desconto = 0.1;
    let valorProdutos = { computador: 2000, celular: 1000, notebook: 1800 }

    let produtoSelecionado = prompt("Qual Produto Voce quer Comprar: COMPUTADOR,CELULAR,NOTEBOOK")
    if (produtoSelecionado == "Computador" || produtoSelecionado == "COMPUTADOR" || produtoSelecionado == "computador") {
        let valorComDesconto = valorProdutos.computador * desconto;
        let valorUsuarioPagar = valorProdutos.computador - valorComDesconto;
       
        res.innerHTML=`O preço original era R$ ${valorProdutos.computador},00.`
        p1.innerHTML=`Você acaba de ganha R$ ${valorComDesconto} de desconto (-10%).`
        p2.innerHTML=`No Fim, você vai pagar R$ ${valorUsuarioPagar} no produto ${produtoSelecionado}`
    }
    else if (produtoSelecionado == "Celular" || produtoSelecionado == "CELULAR" || produtoSelecionado == "celular"){
        let valorComDesconto = valorProdutos.celular * desconto;
        let valorUsuarioPagar = valorProdutos.celular - valorComDesconto;
    
        res.innerHTML=`O preço original era R$ ${valorProdutos.celular},00.`
        p1.innerHTML=`Você acaba de ganha R$ ${valorComDesconto} de desconto (-10%).`
        p2.innerHTML=`No Fim, você vai pagar R$ ${valorUsuarioPagar} no produto ${produtoSelecionado}`
    }
    else if(produtoSelecionado == "notebook" || produtoSelecionado == "Notebook" || produtoSelecionado == "NOTEBOOK"){

        let valorComDesconto = valorProdutos.notebook * desconto;
        let valorUsuarioPagar = valorProdutos.notebook - valorComDesconto;

        res.innerHTML=`O preço original era R$ ${valorProdutos.notebook},00.`
        p1.innerHTML=`Você acaba de ganha R$ ${valorComDesconto} de desconto (-10%).`
        p2.innerHTML=`No Fim, você vai pagar R$ ${valorUsuarioPagar} no produto ${produtoSelecionado}`
    }
    
    else{
        alert("Produto em Invalido")
    }  


}