import { verificarLista } from "./verificarLista.js";
import { verificarComprados } from "./verificarComprados.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaDeComprados = document.getElementById("lista-comprados");

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");

    if(confirmacao) {
        elemento.remove();

        verificarLista(listaDeCompras);
        verificarComprados(listaDeComprados);
    }
}

export {excluirItem};