let cursos_idiomas = [
    { nome: "inglês", preco:2500, carga_horaria: 160 },
    { nome: "espanhol", preco:1500, carga_horaria: 110},
    { nome: "Francês", preco:3600, carga_horaria: 200},
    { nome: "Chines", preco:5500, carga_horaria: 400},
    { nome: "Alemão", preco:3800, carga_horaria: 230}
];


for(let cursos of cursos_idiomas){

    let nome_curso = cursos.nome;
    let preco_curso = cursos.preco;
    let carga_horaria_curso = cursos.carga_horaria;
    let valor_da_hora = preco_curso / carga_horaria_curso;
    
    console.log(`Nome do Curso: ${nome_curso}`);
    console.log(`Carga Horaria do curso ${carga_horaria_curso} horas`);
    console.log(`Preço do curso: ${preco_curso},00`)    

    if(valor_da_hora >= 15){
        console.log("Hora/aula superior ou igual a R$15,00")
    }else{
        console.log("Hora/aula inferior a R$15,00")
    }

    console.log("\n")

};