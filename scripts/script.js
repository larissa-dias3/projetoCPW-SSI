//variavel que recebe referência para o botão de download
let download = document.querySelector('.btn'); //procura no documento a classe btn

download.addEventListener('click', msgSucesso); //escuta clique e chama função para imprimir mensagem de sucesso
function msgSucesso(){
    alert('Download concluído');
}

