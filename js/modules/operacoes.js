import opcoes from "./opcoes.js";
import teclado, {contador, input, posicao} from "./teclado.js";

const nome = document.querySelector('.recepcao');
nome.innerHTML = localStorage.getItem('usuarioAtual');

document.addEventListener("click", e => {
    const element = e.target;

    if(element.classList.contains("active")){
        const botoes =  document.querySelectorAll(".active");
        
        if(element === botoes[0]) return window.location.href = "../../CuboBank/pages/Saldo.html";

        if(element === botoes[1]) return window.location.href = "../../CuboBank/pages/Extrato.html";

        if(element === botoes[2]) return window.location.href = "../../CuboBank/pages/Sacar.html";

        if(element === botoes[3]) return window.location.href = "../../CuboBank/pages/Deposito.html";

        if(element === botoes[4]) return window.location.href = "../../CuboBank/pages/Transferencia.html";

        if(element === botoes[5]) {
            let confirmacao = window.confirm("deseja sair de sua conta?");
            if(confirmacao === true){
                let ligado = false;
                localStorage.setItem('tela', ligado);
                window.location.href = "../../CuboBank/index.html";
            };
        };
    };
});