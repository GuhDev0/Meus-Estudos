let valores = [8,1,4,6,8,10]

//Aqui Estou Chamando os Vetores de Forma nao Otimizada Porem Funcional

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

//Forma Otimizada e Funcional
//for si le "para"
//in si le Dentro ou em


for(let pos=0; pos < valores.length; pos++ ){

    console.log(`a Posição ${pos} tem o valor ${valores[pos]  }`)
}

// forma Mais Simplicada usando o "IN"
console.log("FORMA MAIS SIMPLIFICADA \n ")
for( let pos in valores){
    //Como se le = Para cada posição dentro de valores eu vou mostrar em qual posição esta a array
    console.log(`a Posição ${pos} tem o valor ${valores[pos]}` );
}


//Aprendendo usar o Comando indexOf
// o indexOf server pra mim saber em qual posição esta o elemento dentro da array
// si voce buscar um numero que nao existe o computador sempre retornara -1

poss = valores.indexOf(4)

if(poss == -1){
    console.log("o Valor nao foi encontrado")
}
else{
    console.log(`o valor 4 esta na Posição ${poss}`)
}