let listName = {name:"Gustavo",email: "guh@gmail.com", idade: 21}; // Aqui estou criando uma Coleção de Objetos

    


for(let dados in listName){ // Essa é a sintaxe  for...in // Aqui consigo Chamar a Coleção de Objetos 
                            // Com O For faço repetir o que esta dentro da coleção
                            // e com o IN chamo a coleção para repetir
    console.log(listName[dados]);// imprima no console
}