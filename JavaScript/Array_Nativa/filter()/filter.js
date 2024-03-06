const games = [
    {id:1, name:'God Of War', ativo:true },
    {id:2,name:'Marvel-Homem-aranha', ativo:false},
    {id:3,name:'Dragon ball Z Xenoverse 2 ', ativo:true},
    {id:4,name:'Naruto Storm 4 ', ativo:false}
];

function retornaTrueFilter(game){

    return game.ativo == true;
};



const gamesAtivos = games.filter(retornaTrueFilter);

console.log(gamesAtivos)