//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById('amigo');
    let nome = nomeDoAmigo.value.trim();

    if (nome == '') {
        alert('Favor, insira um nome!');
        return;
    }

    listaDeAmigos.push(nome);
    console.log(listaDeAmigos);

    nomeDoAmigo.value = '';
    exibirAmigos();
}

    function exibirAmigos() {
        let lista = document.querySelector('#listaAmigos');
        lista.innerHTML = '';
        console.log('Lista limpa');

        listaDeAmigos.forEach(listaDeAmigos => {
            let li = document.createElement('li');
            li.textContent = listaDeAmigos;
            lista.appendChild(li);
        });
    }   

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Não há amigos sufucientes para sortear. Adicione mais nomes.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    let resultado = document.querySelector('#resultado');

    listaDeAmigos = []

    document.getElementById('listaAmigos').innerHTML = '';

    resultado.innerHTML = `O seu amigo secreto é: <strong>${amigoSorteado}</strong>`;
}    