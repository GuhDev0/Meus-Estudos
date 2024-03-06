var retorna_media = (nota_1, nota_2) => {

    let media = (nota_1 + nota_2) / 2;
    return media;

}

var media_aluno = retorna_media(9, 8);
console.log("A média do aluno é: " + media_aluno);

// estou criando uma função com o metodo function arrow tradicional


var retorna_media = (nota_1, nota_2) => (nota_1 + nota_2) / 2;

var media_aluno = retorna_media(9, 8);
console.log("A média do aluno é: " + media_aluno);

// aqui estou simplificando o codigo, deixando a function arrow em apenas 1 linha de codigo