let nomesProprios = ["Gustavo", "Lucas", "Emanuelly", "Miguel"];

var contador = 0;

while (contador < nomesProprios.length) {
  console.log(nomesProprios[contador]);
  contador++;
}

let alunos = ["Diogo", "Carlos", "Danilo", "Pedro", "César"];

var contador = 0;

while (contador < alunos.length) {
  let aluno_nome = alunos[contador];

  console.log("Aluno: " + aluno_nome);
  contador++;
}

const serie = 8;
let mensalidade = 0;

if (serie <= 3) {
  mensalidade = 1000;
} else if (serie <= 6) {
  mensalidade = 1200;
} else {
  mensalidade = 1300;
}

console.log(mensalidade);

const jogos = [
  { id: 1, nome: "Resident Evil 7", preco: 250 },
  { id: 2, nome: "God of War", preco: 300 },
  { id: 3, nome: "Stronghold Warlords", preco: 280 },
];

let total = 0;

for (let i = 0; i < jogos.length; i++) {
  total += jogos.length;
}

console.log(total);


