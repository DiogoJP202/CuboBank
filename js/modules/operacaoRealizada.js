import opcoes from "./opcoes.js";
import teclado, {contador, input, posicao} from "./teclado.js";

const titulo = document.querySelector("h2");
const informacoes = JSON.parse(localStorage.getItem("operacao"));

titulo.innerHTML = `${informacoes[0]}REALIZAD${informacoes[1]} COM SUCESSO!`;

document.addEventListener("click", event => {
    const element = event.target;

    if(element.classList.contains("active")){
        const botoes =  document.querySelectorAll(".active");
        
        if(element === botoes[0]) return window.location.href = "../../pages/CuboBank/Operacoes.html";

        if(element === botoes[1]) return window.location.href = "../../pages/CuboBank/Sacar.html";
    };
});