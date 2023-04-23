const nomeContato = document.getElementById("nome-contato");
const numeroContato = document.getElementById("numero-contato");
const form = document.getElementById("form-enviar");
let nomeArray = [];
let numeroArray = [];
let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (nomeArray.includes(nomeContato.value)) {
        alert("ja existe o contato");
    } else {
        inserindoArray();
        atualizaTabela();    
    }

})

function atualizaTabela() {
    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function inserindoArray() {
    nomeArray.push(nomeContato.value);
    numeroArray.push(numeroContato.value);
}

