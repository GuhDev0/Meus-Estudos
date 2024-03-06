const alunos = [
  { nome: "José", av1: 10, av2: 5, av3: 7 },
  { nome: "Ana", av1: 1, av2: 10, av3: 10 },
  { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
  { nome: "Diego", av1: 10, av2: 2, av3: 8 },
];

const aprovados = alunos.filter((aluno) => {
  const media = (aluno.av1 + aluno.av2 + aluno.av3) / 3;

  return media >= 7;
});

aprovados.forEach((aluno) => console.log(aluno.nome));




const aluno = [
    { nome: "José", av1: 10, av2: 5, av3: 7 },
    { nome: "Ana", av1: 1, av2: 10, av3: 10 },
    { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
    { nome: "Diego", av1: 10, av2: 2, av3: 8 },
  ];
  
  const qntAlunos = aluno.length;

  const mediaTurmaAv1 = alunos.reduce((total, aluno) => {
    return total + aluno.av1;
  }, 0  );
  
  console.log( mediaTurmaAv1 / qntAlunos );



  

  const jogos = [
    { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
    { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
    { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
    { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
    { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
    { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
  ];
  
  retornaJogosFliperama.map(jogo) {
    console.log( jogo.nome + ' - ' + jogo.anoLancamento );
  }

  retornaJogosFliperama()