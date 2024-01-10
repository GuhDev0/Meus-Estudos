let funcionarios = [  // aqui crie uma array com os Registro do Funcionario Habilitados

    {id:1, nome:"Gustavo", habilitado: false},
    {id:2, nome:"Lucas", habilitado: false},
    {id:3, nome:"Emanuelly", habilitado: true},
    {id:4, nome:"Miguel", habilitado: false},

];

let  contador = 0;
let funcionariosHabilitado = false; // Aqui estou criando uma Variavel que vai indicar se tem um Funcionario Habilitado

while(contador < funcionarios.length ){ // enquanto o contador for menor que quantidade de registro que esta dentro da array(funcionarios) essa função vai se reptir

        let funcionario = funcionarios[contador];// aqui estou Guardando a Função De Contagem dentro de uma Variavel pra ficar mais facil de indentificar a Função  

        if(funcionario.habilitado == true){// aqui si o contador encontrador um registro TRUE ele vai fazer o seguinte comando
            console.log(`Funcionario habilitado encontrado ${funcionario.nome}`);
            funcionariosHabilitado = true; // a Var funcionarioHabilitado Passara a receber True si for encontrado Um registro TRUE  
            break;// aqui estou parando o loop caso for encontrado um Funcionario TRUE(habilitado) 
        }
        contador++; // aqui estou falando pro contator receber +1
    
}

if(!funcionariosHabilitado){
    console.log('Nenhum Funcionario habilitado foi encontrado');
}