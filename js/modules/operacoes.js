import opcoes from "./opcoes.js";
import teclado, {contador, input, posicao} from "./teclado.js";

const nome = document.querySelector('.recepcao');
nome.innerHTML = localStorage.getItem('usuarioAtual');

document.addEventListener("click", e => {
    const element = e.target;

    if(element.classList.contains("active")){
        const botoes =  document.querySelectorAll(".active");
        
        if(element === botoes[0]) return window.location.href = "../../pages/Saldo.html";

        if(element === botoes[1]) return window.location.href = "../../pages/Extrato.html";

        if(element === botoes[2]) return window.location.href = "../../pages/Sacar.html";

        if(element === botoes[3]) return window.location.href = "../../pages/Deposito.html";

        if(element === botoes[4]) return window.location.href = "../../pages/Transferencia.html";

        if(element === botoes[5]) {
            let confirmacao = window.confirm("deseja sair de sua conta?");
            if(confirmacao === true){
                let ligado = false;
                localStorage.setItem('tela', ligado);
                window.location.href = "../../index.html";
            };
        };
    };
});