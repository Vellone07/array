// FUNÇÃO PARA ARMAZENAR NOMES EM ARRAY
var dadosLista = [];
function salvarUser(){
    let nomeUser=document.getElementById("nomeUser").value;
    if(nomeUser){
        dadosLista.push(nomeUser);
        criarLista();
    }
}

// FUNÇÃO PARA CRIAR LISTA DE USUÁRIO
function criarLista(){
let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
for(let i = 0;i <= (dadosLista.length - 1);i++){

    tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick=''>Editar</button><button class='btn btn-danger'  onclick=''>Excluir</button></td></tr>";

    document.getElementById('tabela').innerHTML = tabela;




    }

}