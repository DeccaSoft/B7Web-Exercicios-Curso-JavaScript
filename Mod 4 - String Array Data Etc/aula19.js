function somar(x, y){
    return x + y;
}
console.log(somar(1,3));

let subtrair = function(x, y){
    return x - y;
}
console.log(subtrair(1,3));

//Arrow Function

//Nesse caso se usa mais o const
let multiplicar = (m, n) => {
    return m * n;
};
//Se utilizar as chaves, precisa-se colocar o return
console.log(multiplicar(2,5));

//Se for somente um linha de comando, nào precisa das chaves e nem do return
let dividir = (k, w) => k / w;
console.log(dividir(30, 2));

let qtdLetras = (nome) => nome.length;
console.log(qtdLetras('André'));

//Quando se tem apenas um parametro, pode-se resumir ainda mais, omitindo-se os parênteses, mas se não tiver nenhum parâmetro DEVE-se usar os parênteses, por exemplo: let variavel = () => comando;...
let qtdLetras2 = nome2 => nome2.length;
console.log(qtdLetras2('Azevedo'));

//============================
//Operador Spread

let numeros = [1, 2, 3];
console.log(numeros);
//Aproveitando o array numeros em outro array (ANTES)...
let numeros2 = numeros;
numeros2.push(4, 5, 6);
console.log(numeros2);
//Operador Spread  (...)
let numeros3 = [...numeros2, 7, 8, 9];
console.log(numeros3);

//Spread com Objetos

let inform = {
    nome: 'André',
    sobrenome: 'Morais de Azevedo',
    idade: 46
};

console.log(inform);

let novaInform = {
    ...inform,
    cidade: 'Fortaleza',
    estado: 'CE',
    pais: "Brasil"
};
console.log(novaInform);

//Spread com Funções

function adicionarInfo(inform){
    let novasInfo = {
        ...inform,
        status: 0,
        token: 'á1ds54fsdg',
    };
    return novasInfo;
}

console.log(adicionarInfo({login: 'andre', senha: '1234'}));


//Operador Rest

function adicionar(...numeros){
    console.log(numeros);
}

adicionar(0, 1, 2, 3, 'Andre');

//Exercício mescalndp Spread e Rrest

let nomes = ["André", "Dani"];
function add(nomes, ...novosNomes){
    return [...nomes, ...novosNomes]
}
let todosNomes = add(nomes, 'Mateus', 'Davi');
console.log(todosNomes);

// Includes

let lista = ['ovo', 'café', 'arroz', 'feijão', 'macarrão'];
console.log(lista.includes('ovo'));

let nComp = 'André Morais de Azevedo';
console.log(nComp.includes('orai'));

//Repeat

console.log('x'.repeat(20));
let varString = "André";
console.log(varString.repeat(3));

//Object: Keys, Values, Entries

let lista2 = ['pipoca', 'salgadinho', 'refri', 'docinho'];
console.log(Object.keys(lista2));
console.log(Object.values(lista2));
console.log(Object.entries(lista2));

let pessoa = {
    nome: 'André',
    sobrenome: 'Morais',
    idade: 46
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

//String: padStart, padEnd

let telefone = '9981';
console.log(telefone.padEnd(9, '*'));
console.log(telefone.padStart(9, '-'));

let cartao = '1234567890123456';
let lastDigits = cartao.slice(-4);
console.log(lastDigits);
let mascara = lastDigits.padStart(16, '*');
console.log(`Cartão Escolhido: ${mascara}`);