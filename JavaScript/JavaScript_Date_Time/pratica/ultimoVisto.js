const dataAtual = new Date(); //aqui estou pegando a data atual do sistema
const ultimoVisto = new Date('2024/1/30 16:00:00');//criando um ultimo visto do usuario

const horas = dataAtual.getHours();//pegando as horas da data atual
const timeVisto = ultimoVisto.getTime();//Colocando o ultimoVisto em numeros Decimais
const timeDataAtual = dataAtual.getTime();//Colocando o timeDataAtual em numeros Decimais

const diferençaDeTime = timeDataAtual - timeVisto; // pegando a diferença

const millesegundosHoras = 1000 * 60 * 60; // millesegundos * segundos * minutos = 1 hora
const millesegundosDia = millesegundosHoras * 24 // aqui é simples entender 1 * 24 = 24horas/1 dia

let msg = ""

if( horas > 18  ||  horas < 6){
    msg = "Boa Noite! \n";
}else if(horas > 6 ||  horas < 12){
    msg = "Bom dia! \n"
}else{
    msg = "Boa Tarde! \n"
}

if(diferençaDeTime > millesegundosDia){
    msg += "Voce esta Ausente ha Dias!"
}else if(diferençaDeTime > millesegundosHoras){
    msg += "voce esta Ausente Algumas Horas "
}else{
    msg += "Que Bom que Ainda esta Aqui"
}

console.log(msg)


