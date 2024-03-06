const dataAtual = new Date();

console.log( dataAtual.getFullYear() );
console.log( dataAtual.getMonth() );
console.log( dataAtual.getDate() );
console.log( dataAtual.getHours() );
console.log( dataAtual.getMinutes() );
console.log( dataAtual.getSeconds() );
console.log( dataAtual.getMilliseconds() );
console.log( dataAtual.getDay() );  




const dateAtual = new Date();

console.log( dateAtual.getTime() );//aqui consigo ver em millisegundos se passaram desde de uma data ate a data atual
console.log( dateAtual.getTimezoneOffset() );//aqui consigo ver quantos minutos tem de difereça do fuso-horario da maquina
console.log( dateAtual.valueOf() ); 



const personalizandoData =  {
    weekday: 'long', // segunda-feira
}


