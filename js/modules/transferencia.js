import opcoes from "./opcoes.js";
import teclado, {contador, input, posicao} from "./teclado.js";
import erro from "./erroEmTela.js";

const enviaFormulario = event => {
    if(event !== undefined) event.preventDefault();

    let tranferencia = Number(document.querySelector("#Itransferencia").value);
    let conta = Number(document.querySelector("#Iconta").value);
    let usuario = JSON.parse(localStorage.getItem("usuarios"))[localStorage.getItem("posicaoUsuario")];
    let saldoUsuario = usuario.saldo;
    let extrato = usuario.extrato;

    if(tranferencia > saldoUsuario){
        alert("Saldo insuficiente!");
        return erro();
    };

    if(tranferencia <= 0){
        alert("O valor da tranferência precisa ser pelo menos R$ 1.");
        return erro();
    };

    if(conta.leght < 8 || conta.leght > 8){
        alert("O número da conta precisa ter apenas 8 números!");
        return erro();
    }

    if(!conta){
        alert("Valor de conta inválido!")
        return erro();
    }

    const senhaUsuario = usuario.senha
    const senha = prompt("Insira a senha: ");
    
    if(senha === senhaUsuario){
        saldoUsuario = saldoUsuario - tranferencia;
        let usuarios = JSON.parse(localStorage.getItem("usuarios"));

        extrato.push(`Valor tranferido <span class="negativo">R$ - ${tranferencia}</span> para a conta: ${conta}`);

        usuarios[localStorage.getItem("posicaoUsuario")].saldo = saldoUsuario;
        usuarios[localStorage.getItem("posicaoUsuario")].extrato = extrato;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        localStorage.setItem("operacao", JSON.stringify(["TRANSFERÊNCIA ", "A"]));
        
        return window.location.href = "../../pages/OperacaoRealizada.html";
    };

    alert("senha inválida.");
    erro();
};

document.addEventListener("click", event => {
    const element = event.target;

    if(element.classList.contains("active")){
        const botoes =  document.querySelectorAll(".active");
        
        if(element === botoes[0]) return window.location.href = "../../pages/Operacoes.html";

        if(element === botoes[1]) enviaFormulario();
    };

    if(element.classList.contains("enviar")) enviaFormulario(); 
});