//Callback

function alertar(){
    console.log("ALERTA...");
}

let nome = 'André';
setTimeout(alertar, 1000);
let sobrenome = "Morais";
setTimeout(alertar, 3000);
console.log("Nome Completo: " + nome + ' ' + sobrenome);

//Promise

function pegarTemperatura(){
    return new Promise(function(resolve, reject){
        console.log("Pegando Temperatura...");
        setTimeout(function(){
            resolve('40 na Sombra !');
        }, 2000);
    });
}

let temp = pegarTemperatura();
console.log(temp);
temp.then(function(resultado){
    console.log("Temperatura: " + resultado);
});
temp.catch(function(error){
    console.log(("Ooops, deu Erro !"));
});