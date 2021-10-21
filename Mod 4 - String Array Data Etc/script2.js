let timer;

function comecar(){
    timer = setInterval(showTime, 1000);
}

function parar(){
    clearInterval(timer);
}

function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h + ':' + m + ":" + s;
    document.querySelector('.demo').innerHTML = txt;
    console.log(txt);
}

function rodar(){
    document.querySelector('.demo').innerHTML = 'Rodando em 2s...'
    timer = setTimeout(function(){
        comecar(); 
    })
}

function pararSetTimeout(){
    clearTimeout(timer);
}