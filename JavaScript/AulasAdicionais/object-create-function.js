criarPersonagem = (nome, anime) => {
  const selecionarPersonagem = Object.create({});//esse elemento faz que eu consiga criar um objeto, Seja um objeto ja criado ou nao
  selecionarPersonagem.nome = nome; // estou falando para o objeto.nome receber o parametro nome, para que quando eu coloca o nome dentro do parametro o objeto nome receba o parametro digitado 
  selecionarPersonagem.anime = anime;
  return selecionarPersonagem
  // aqui estou criando uma função que vai returna um objeto com dois parametros
};

const goku = criarPersonagem("goku","Dragon Ball");//estou chamando a função e colocando os paramentros

console.log(goku)//Estou chamando a var
