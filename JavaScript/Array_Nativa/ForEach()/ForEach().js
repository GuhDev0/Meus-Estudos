const carrinho = [
  { nome: "The Legend of Zelda", qnt: 1, valor: 250 },
  { nome: "Super Mario Kart 8", qnt: 1, valor: 300 },
  { nome: "New Super Mario Bros.", qnt: 1, valor: 250 },
];

function imprimirItem(produto, index) {
  let texto = index + " - ";
  texto += produto.qnt + " UN - ";
  texto += produto.nome + " - ";
  texto += "R$ " + produto.valor + " - ";
  texto += "R$ " + produto.qnt * produto.valor;

  console.log(texto);
}

carrinho.forEach(imprimirItem);

// minha forma

const nomesPersonagens = [
  { nome: "Goku", animes: "Dragon ball" },
  { nome: "luffy", animes: "One piece" },
  { nome: "Sasuke", animes: "Naruto" },
  { nome: "Vegeta", animes: "Dragon ball" },
];

function imprimaPersonagem(Personagem, animes) {
  let texto = animes + "-";
  texto += Personagem.nome + " : ";
  texto += Personagem.animes;
  console.log(texto);
}

nomesPersonagens.forEach(imprimaPersonagem);

const tecnologias = ["JavaScript", "HTML", "CSS", "React", "Angular"];

tecnologias.splice(1, 2);
tecnologias.forEach((tecnologia) => {
  console.log(tecnologia);
});

const noticias = [
  "Cyberpunk 2077: Ray Tracing será exclusivo Nvidia no lançamento ",
  "Elon Musk planeja criar uma colônia de humanos em Marte até 2050 ",
];
const novaNoticia = "Among Us ganhará tradução em português do Brasil ";

noticias.splice(0, 1);
noticias.push(novaNoticia);

for (const noticia of noticias) {
  console.log(noticia);
}

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function abreviar(mes) {
  return mes.substr(0, 3);
}

const mesesAbreviados = meses.map(abreviar);

console.log(mesesAbreviados)
