import NumberAleatorio from "readline-sync"

var numberEscolhido = NumberAleatorio.question("Escolha um Number de 1 a 10:  \n ")



var cidade = [
    "",
    "são Paulo",
    "rio de janeiro",
    "bahia",
    "Minas Gerais",
    "Mato grosso",
    "Maua",
    "Santo Andre",
    "Parana",
    "Osasco",
    "Moca"
];
if(numberEscolhido == 0){
    console.log("Numero Invalido")
}
 else if(numberEscolhido > 10 ){
    console.log("O Numero maximo é 10")
    
}
else{
    console.log(`Cidade : ${cidade[numberEscolhido]}`)
}











