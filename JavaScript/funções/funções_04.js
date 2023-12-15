
//Aqui estou Criando um calculo de fatorial

function fatorial(n){//Criei o nome e adicionei o parametro

    let fat = 1 //defini o valor pra essa variavel pra fazer calculo de repitição
    for(let c = n; c > 1; c--  ){ // aqui criei uma var C que recebera o parametro N,
                                  // e Enquanto o C FOR MAIOR que 1 ele Diminuira ate ele for igual a 1   
        fat *= c
    }
    return fat //
}
    console.log(fatorial(5))
// 5! = 5x4x3x2x1=120 