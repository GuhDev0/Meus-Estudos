const animes = [
    {name:"Mario",idade: 10,profissão:"Dev"},
    {name:"Guilherme",idade: 20,profissão:"engenheiro"},
    {name:"Lucas",idade: 22,profissão:"Mecanico"}
];
function names(n){
   return n.name + " : " +  n.idade
    
    
}

const nomes = animes.map(names)
console.log(nomes)