function menuToogle(){
    let menuArea = document.querySelector('#menu-area');
    if(menuArea.style.width == '0px'){
        menuArea.style.width = '200px';
    }else{
        menuArea.style.width = '0px';
    }
}

//For Loop Array

let carros = ['Ferrari', 'Fusca', 'Palio', 'Corola'];

let html = '<ul>';

for(let i in carros){
    html += '<li>' + carros[i] + '</li>';
}

html += '</ul>';

document.querySelector('#demo-for').innerHTML = html;