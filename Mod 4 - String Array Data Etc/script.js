//DATAS

let d = new Date();
console.log(d);
console.log(d.toDateString());
console.log(d.toUTCString());
let d2 = new Date(2020, 0, 1, 12, 30, 12);
console.log(d2);
let d3 = new Date('2020-01-01 15:42:17');
console.log(d3);

let novoValor = d.getFullYear();
console.log('Ano: ' + novoValor);

novoValor = d.getMonth();
console.log('Mês: ' + novoValor);

novoValor = d.getDate();
console.log('Dia: ' + novoValor);

novoValor = d.getDay();
console.log('Dia da Semana (Domingo = 0): ' + novoValor);

novoValor = d.getHours();
console.log('Hora: ' + novoValor);

novoValor = d.getMinutes();
console.log('Minuto: ' + novoValor);

novoValor = d.getSeconds();
console.log('Segundo: ' + novoValor);

novoValor = d.getMilliseconds();
console.log('MilliSegundos: ' + novoValor);

novoValor = d.getTime();
console.log('TimeStamp: ' + novoValor);

d = new Date();
d.setDate(d.getDate() + 5);
novoValor = d;
console.log('5 dias para frente: ' + novoValor);
console.log();
console.log('========================================');
console.log();


//FUNÇÕES MATEMÁTICAS (Classe Math)

novoValor = Math.PI;
console.log('Pi: ' + novoValor);

novoValor = Math.round(3.499999);
console.log('Até exclusivo .5 arredonda para baixo (3.49999): ' + novoValor);

novoValor = Math.round(3.5);
console.log('.5 em diante arredonda para cima (3.5): ' + novoValor);

novoValor = Math.floor(3.99999);
console.log('Arredonda para Baixo (3.99999): ' + novoValor);

novoValor = Math.ceil(3.00001);
console.log('Arredonda para Cima (3.0001): ' + novoValor);

novoValor = Math.abs(-9.657);
console.log('Valor Absoluto (-9.657): ' + novoValor);

novoValor = Math.max(7, -100, 59, -41, 2212);
console.log('Valor Mínimo (7, -100, 59, -41, 2212): ' + novoValor);

novoValor = Math.min(7, -100, 59, -41, 2212);
console.log('Valor Máximo (7, -100, 59, -41, 2212): ' + novoValor);

novoValor = Math.random();
console.log('Valor Aleatório / Randômico (Entre 0-inclusivo e 1-exclusivo): ' + novoValor);

novoValor = Math.floor(Math.random() * 100);
console.log('Valor Aleatório / Randômico (Entre 0-inclusivo e 100-exclusivo): ' + novoValor);