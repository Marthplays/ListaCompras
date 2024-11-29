import { adicionarItem } from "./adicionarItem.js";
import { verificarComprados } from "./verificarComprados.js";

const botaoSalvarItem = document.getElementById("salvar");
botaoSalvarItem.addEventListener("click", adicionarItem);

const listaComprados = document.getElementById("lista-comprados");
verificarComprados(listaComprados);