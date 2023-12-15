let num = 2 //document.querySelector('input#fnumber')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
 


    // Aqui estou analisando o Numero
    function isNumber(num) {
        if(Number(num) > 1  && Number(num) < 100){
            return true
        }
        else{
            return false
        }
    }
    function inLista(num){
        if(l.indexOf(Number(num)) != -1){
            return true
        }   
        else{
            return false
        }
    }

    function adicionar(){
        if(isNumber(num.value) && inLista(num.value))
        {
            window.alert('tudo ok')
        }else{
            window.alert('nao')
        }
    }
