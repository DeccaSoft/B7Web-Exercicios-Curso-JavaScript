async function loadPosts(){     //async permite o uso do await

    document.getElementById("posts").innerHTML = 'Carregando...';

    /*
    PRIMEIRA OPÇÃO:

    let req = fetch();      //fetch() retorna um promise
    req.then();
    */

    /*
    SEGUNDA OPÇÃO:

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json();    //Também retorna uma Promise, por isso precisa-se de outro then
        })
        .then(function(json){
            montarBlog(json);
            //document.getElementById("posts").innerHTML = json.length + ' posts';
        })
        .catch(function(error){
            console.log("Deu Problema!!!");
        });
    */

    //TERCEIRA OPÇÃO (AWAIT)
    
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    montarBlog(json);
}

function montarBlog(lista){
    let html = '';
    for(let i in lista){
        html += '<h3>' + lista[i].title + '</h3>';
        html += lista[i].body + '<br/>';
        html += '<hr/>';
    }
    document.getElementById("posts").innerHTML = html; 
}

async function inserirPost(){
    document.getElementById("posts").innerHTML = "Carregando...";

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Título de Teste',
            body: 'Corpo de Teste',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let json = await req.json();
    console.log(json);
}

async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0];
    console.log(arquivo);

    let body = new FormData();
    body.append('title', 'Bla bla blá');
    body.append('arquivo', arquivo);

    let req = await fetch('https://meusite.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

function mostrar(){
    //PRIMEIRA OPÇÃO:

    let imagem = document.getElementById("arquivo").files[0];
    console.log(imagem);

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;
    document.getElementById("area").appendChild(img);

    // ou...
    //document.getElementById("area").innerHTML = '<img />';

    
    /*
    SEGUNDA OPÇÃO:

    let reader = new FileReader();
    let imagem = document.getElementById('arquivo').files[0];

    //calback
    reader.onloadend = function(){
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;
        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(imagem);
    */
}