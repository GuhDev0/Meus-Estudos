let resultado = window.document.getElementById('res')
let titulo_res = window.document.getElementById('titulo-res')

function metroParaKm(distanciaEmMetros,n2){
     var km =  parseFloat(distanciaEmMetros) / n2
    return km
}
function metroParaHecto(distanciaEmMetros,n2){
    var hc = parseFloat(distanciaEmMetros) 
}

function clicar(){
    var distanciaEmMetros =  prompt("Digite uma Distancia em Metros(m)")
    var metroParaK = metroParaKm(parseFloat(distanciaEmMetros),1000)
    titulo_res.innerHTML = ` A Distancia de ${distanciaEmMetros} Metros, Corresponde a... \n` 
    resultado.innerHTML = `${metroParaK} quilometros (KM)\n `
    
    
    

}


