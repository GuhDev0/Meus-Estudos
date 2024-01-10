let filmes = [
    { id: 1, nome:"cavaleiro Dos Zodiacos", preco: 10 },
    { id: 2, nome:"Dragon ball Z", preco: 25 },
    { id: 3, nome:"Naruto", preco: 50 }

];

let desconto = 5; 

for (contador = 0;contador < filmes.length ; contador++ ){

let filme = filmes[contador];
 
for(let propriedade in filme){
    if(propriedade == "preco"){
        let preco = propriedade
        let novo_preço = filme[preco] - desconto;
        console.log(`preço  atualizado: R${novo_preço},00`)
    }else{
        console.log(`${propriedade}: ${filme[propriedade]} `)
    }
    
    
} 
console.log("\n" )
}