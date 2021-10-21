let pessoa = {nome: "André",
    idade: 46,
    caracteristicas: ['sorridente', 'maravilhoso', 'top'],
    estetica: {
        altura: 170,
        peso: 75
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.caracteristicas);
console.log(pessoa.caracteristicas[1]);
console.log(pessoa.estetica);
console.log(pessoa.estetica.peso);

let pessoaJ = JSON.parse('{"nome": "André", "idade": 46}');
console.log(pessoaJ);

let pessoaS = JSON.stringify({nome: 'André', idade: 46, algo: null});
console.log(pessoaS);

let busca = {input: 'bon'};
let buscaString = JSON.stringify(busca);
console.log(buscaString);
let resultado = {
    lista : [
        'bonieck',
        'bonieck lacerda',
        'bonito'
    ]
};
let res = JSON.stringify(resultado);
console.log(res);
let resJ = JSON.parse(res);
console.log(resJ);