const containerListaComprados = document.getElementById("lista-comprados")

export function verificarComprados(lista) {

    if (lista.childElementCount === 0) {
        containerListaComprados.style.display = "none";
    } else {
        containerListaComprados.style.display = "block";
    }
}