function azul(){
    limpar();
    document.querySelector('#titulo').classList.add('azul');
}
function vermelho(){
    limpar();
    document.querySelector('#titulo').classList.add('vermelho');
}
function verde(){
    limpar();
    document.querySelector('#titulo').classList.add('verde');
}
function limpar(){
    document.querySelector('#titulo').classList.remove('azul');
    document.querySelector('#titulo').classList.remove('vermelho');
    document.querySelector('#titulo').classList.remove('verde');
}

function mostrarTelefone(elemento){
    elemento.style.display = 'none';
    document.querySelector('#fone').style.display = 'block';
}