class cachorroClasse //criando uma classe que armazena as funções
{
    constructor(nome,raca)//metodo para criar a função
    {
        this.nome = nome;
        this.raca = raca;
    }
}

const viraLata = new cachorroClasse("bob", "vira-lata");
console.log(viraLata)
console.log(Object.getPrototypeOf(viraLata))



