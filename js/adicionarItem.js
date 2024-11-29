import { criarItemLista } from "./criarItemLista.js";
import { verificarLista } from "./verificarLista.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");


export function adicionarItem(evento) {
    
    evento.preventDefault();
    
    if (item.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = criarItemLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarLista(listaDeCompras);
    item.value = "";
}