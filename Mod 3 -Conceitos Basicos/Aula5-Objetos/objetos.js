//Array
let carros = [
    'Palio',
    'Uno',
    'Corola',
    'Ferrari'
];

console.log(carros[2]);

//Objeto
let carro = {
    marca: 'Fiat',
    nome: 'Uno',
    modelo: 'Treking',
    ano: 2000,
    cor: 'vermelho',
    ligado: false,
    ligar: function(){
        console.log(`Ligando o ${this.nome}`);
        let ligado = true;
        console.log(`Carro ligado: ${ligado}`);
    }
};

console.log(carro['marca']);
console.log(carro.nome);
carro.ligar();
