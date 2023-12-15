function parimpar(n)//Aqui estou definindo o nome da ação e adicionando o parametro 
{
//Aqui difini o que ação tem que fazer

    if(n % 2 == 0)
    {
        return "Par"
    }
    else{
       return "Impar"

    }
}

let res = parimpar(2) // Aqui estou colocando ação dentro de uma Var pra Armazena, 
                      //  para quando eu chamar a função ela seja chama pelo nome da var 
    //da pra chamar de duas formas a função

    console.log(parimpar(2))//ou chamando ela direto
    console.log(res) // colocando dentro de uma variavel
