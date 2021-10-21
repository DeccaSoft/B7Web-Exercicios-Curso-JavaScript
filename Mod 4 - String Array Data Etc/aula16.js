let pessoa = {
    nome: 'André',
    sobrenome: 'Morais de Azevedo',
    idade: 46,
    social: {
        facebook: 'face',
        gmail: 'gmail',
        instagram: {
            url: '@insta',
            seguidores: 1000
        }
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);
console.log(pessoa.social.facebook);
console.log(pessoa.social.instagram.url);
console.log(pessoa.nomeCompleto());

//Separando em variáveis..

let nomeV = pessoa.nome;
let facebookV = pessoa.social.facebook;
console.log(nomeV, facebookV);

//Desconstruindo...
let {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade);

//ou

let {nome: nomeD, sobrenome: sobrenomeD, idade: idadeD, curso = 'JavaScript'} = pessoa; //Atribuindo valor padrão 
console.log(nomeD, sobrenomeD, idadeD, curso);

let {gmail} = pessoa.social;
console.log(gmail)

//ou

let {social: {facebook}} = pessoa;
console.log(facebook);

let {social: {instagram: {url: insta}}} = pessoa;
console.log(insta);

function pegarNomeCompleto(obj){
    //return obj.nome + ' ' + obj.sobrenome;
    let nome = obj.nome;
    let sobrenome = obj.sobrenome;
    return `${nome} ${sobrenome}`
}

console.log(pegarNomeCompleto(pessoa));

//Com desconstrucão...

function pegarNomeCompletoDesconstruido({nome, sobrenome, social: {instagram: {url: instagram}}}){
    return `${nome} ${sobrenome} (Siga em ${instagram})`;
}

console.log(pegarNomeCompletoDesconstruido(pessoa));

//Desconstruindo Arrays...

let info = ['André', 'Dani', 'Mateus', 'Davi'];
let [ n1, n2, n3, n4] = info;
console.log(n1, n2, n3, n4);

[n5, , , n8] = info;
console.log(n5, n8);

let [nome1, nome2, age = 46] = ['André', 'Azevedo'];
console.log(nome1, nome2, idade);

//Desconstruindo Arrays com funções...

function criar(){
    let a = [1,2,3];
    return a;
}

let numeros = criar();
let [a,b,c] = numeros;
console.log(a,b,c);

//ou, simplificando...

function criar2(){
    return [3,2,1];
}

let [x, y, z] = criar2();
console.log(x, y, z);