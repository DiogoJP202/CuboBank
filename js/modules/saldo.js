import opcoes from "./opcoes.js";
import teclado, {contador, input, posicao} from "./teclado.js";

const saldo = document.querySelector('.textoSaldo');
const usuarios = JSON.parse(localStorage.getItem('usuarios'));

if(usuarios[localStorage.getItem("posicaoUsuario")].saldo < 0) saldo.style.color = "#f00";

saldo.innerHTML = `R$ ${usuarios[localStorage.getItem("posicaoUsuario")].saldo}`;

document.addEventListener("click", event => {
    const element = event.target;

    if(element.classList.contains("active")) return window.location.href = "../../pages/CuboBank/Operacoes.html";
});