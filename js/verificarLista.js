const mensagem = document.getElementById("mensagem-lista-vazia");

export function verificarLista(lista) {
    if (lista.querySelectorAll("li").length === 0) {
        mensagem.style.display = "block";
    } else {
        mensagem.style.display = "none";
    }
}