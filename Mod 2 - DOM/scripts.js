function subirTela(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function decidirBotaoScroll(){
    if(window.scrollY === 0){
        document.querySelector('.scrollbutton').style.display = 'none'; //Esconde o Botão
    }else{
        document.querySelector('.scrollbutton').style.display = 'block';    // Exibe o botão
    }
}

//setInterval(decidirBotaoScroll, 1000);    //Não é uma boa opção, pois exige muito processamento

window.addEventListener('scroll', decidirBotaoScroll);

