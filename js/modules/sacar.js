import opcoes from "./opcoes.js";
import teclado, {contador, input, posicao} from "./teclado.js";
import erro from "./erroEmTela.js";

const enviaFormulario = event => {
    if(event !== undefined) event.preventDefault();

    let saque = Number(document.querySelector("#Isacar").value);
    let usuario = JSON.parse(localStorage.getItem("usuarios"))[localStorage.getItem("posicaoUsuario")];
    let saldoUsuario = usuario.saldo;
    let extrato = usuario.extrato;

    if(saque > saldoUsuario){
        alert("Saldo insuficiente!");
        return erro();
    };

    if(saque <= 0){
        alert("O valor de saque precisa ser pelo menos R$ 1.");
        return erro();
    };

    const senhaUsuario = usuario.senha
    const senha = prompt("Insira a senha: ");
    
    if(senha === senhaUsuario){
        saldoUsuario = saldoUsuario - saque;
        let usuarios = JSON.parse(localStorage.getItem("usuarios"));

        extrato.push(`Valor sacado <span class="negativo">R$ - ${saque}</span>`);

        usuarios[localStorage.getItem("posicaoUsuario")].saldo = saldoUsuario;
        usuarios[localStorage.getItem("posicaoUsuario")].extrato = extrato;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        localStorage.setItem("operacao", JSON.stringify(["SAQUE ", "O", "Sacar.html"]));
        
        return window.location.href = "../../CuboBank/pages/OperacaoRealizada.html";
    };

    alert("senha inválida.");
    erro();
};

document.addEventListener("click", event => {
    const element = event.target;

    if(element.classList.contains("active")){
        const botoes =  document.querySelectorAll(".active");
        
        if(element === botoes[0]) return window.location.href = "../../CuboBank/pages/Operacoes.html";

        if(element === botoes[1]) enviaFormulario();
    };

    if(element.classList.contains("enviar")) enviaFormulario(); 
});