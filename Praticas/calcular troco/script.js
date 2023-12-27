

var list = [
    "mouse",
    "teclado",
    "fone"


]

function clicar() {
    var mouse = list[0]
    var teclado = list[1]
    var fone = list[2]

    var itemEscolhido = prompt("Que Produto Voce esta Comprando? ")
    if (itemEscolhido == mouse) {
        var valorDoUsuario = prompt(`Qual foi o Valor que Voce deu para pagar ${itemEscolhido}? `)
        var troco = valorDoUsuario - 100
        alert(`Voce Comprou ${itemEscolhido}  Gamer  que custou R$ 100,00. \n 
        Voce Deu ${valorDoUsuario} Em Dinheiro e vai Receber ${troco} de troco \n  
        Volte Sempre  `) 
      
              
    }
    else if(itemEscolhido == teclado){
        var valorDoUsuario = prompt(`Qual foi o Valor que Voce deu para pagar ${itemEscolhido}? `)
        var troco = valorDoUsuario - 100
        alert(`Voce Comprou ${itemEscolhido}  Gamer  que custou R$200,00. \n 
        Voce Deu ${valorDoUsuario} Em Dinheiro e vai Receber ${troco} de troco \n  
        Volte Sempre  `)
      } 
      else if(itemEscolhido == fone){
        var valorDoUsuario = prompt(`Qual foi o Valor que Voce deu para pagar ${itemEscolhido}? `)
        var troco = valorDoUsuario - 200
        alert(`Voce Comprou ${itemEscolhido}  Gamer  que custou R$250,00. \n 
        Voce Deu ${valorDoUsuario} Em Dinheiro e vai Receber ${troco} de troco \n  
        Volte Sempre  `)
      }                 
    else {
        alert("Escolha um Dos Produtos")
    }
}