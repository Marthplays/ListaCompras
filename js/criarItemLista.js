import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarComprados } from "./verificarComprados.js";

const listaDeComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

export function criarItemLista(item) {
    const itemDaLista = document.createElement("li");
    const containerDaLista = document.createElement("div");
    containerDaLista.classList.add("item-lista-container");
    
    const containerNomeCompra = document.createElement("div");
    containerNomeCompra.classList.add("container-nome-compra");
    
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");
    
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++;
    
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);
    
    checkboxLabel.addEventListener("click", function(evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")
        
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaDeComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }

        verificarComprados(listaDeComprados);
        
    })
    
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);
    
    containerCheckbox.appendChild(checkboxLabel);
    containerNomeCompra.appendChild(containerCheckbox);
    
    const nomeItem = document.createElement("p");
    nomeItem.id = "item-titulo";
    nomeItem.innerText = item;
    containerNomeCompra.appendChild(nomeItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener("click", function () {
        excluirItem(itemDaLista);
    });

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);
    
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");
    
    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.addEventListener("click", function () {
        editarItem(itemDaLista);

        const elementoData = itemDaLista.querySelector('.item-lista-texto'); 
        elementoData.textContent = obterDataAtual();
    })

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);
    
    containerDaLista.appendChild(containerNomeCompra);
    containerDaLista.appendChild(containerBotoes);

    function obterDataAtual() {
        return `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`
    }

    const dataItem = obterDataAtual();
    const elementoData = document.createElement('p');
    elementoData.classList.add('item-lista-texto');
    elementoData.textContent = dataItem;
    itemDaLista.appendChild(elementoData);
    
    itemDaLista.appendChild(containerDaLista);
    itemDaLista.appendChild(elementoData)

    return itemDaLista;
}