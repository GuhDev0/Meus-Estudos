const guardaNome = []
const nomeDoUsuario = document.querySelector('#usuarioName')
const receberArray = document.querySelector('#receberName')


function enviar(){

    guardaNome.push(nomeDoUsuario.value);
    receberArray.innerHTML = guardaNome
}
function apagar(){
    guardaNome.pop(nomeDoUsuario.value)
    receberArray.innerHTML = guardaNome
    
}