import adicionarUsuarioPadrao from "./moduloUsuarioPadrao.js";
import opcoes from "./opcoes.js";
import teclado, {contador, input, posicao} from "./teclado.js";
import erro from "./erroEmTela.js";

adicionarUsuarioPadrao();
window.alert("Usuário Padrão: admin, senha: 3589");

const form = document.querySelector("form"); 

const enviaFormulario = event => {
    if(event !== undefined) event.preventDefault();

    let usuario = document.querySelector("#Iusuario").value;
    let senha =  document.querySelector("#Isenha").value;
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    let validado = false;
    let posicaoUsuario = 0;

    for(let user of usuarios){ // Verifica os nomes de usuários do armazenamento local
        if(user.usuario === usuario && user.senha === senha){
            validado = true;
            break;
        };
        posicaoUsuario++;
    };

    if(validado === true){
        localStorage.setItem("usuarioAtual", usuario);
        localStorage.setItem("posicaoUsuario", posicaoUsuario);
        return window.location.href = "../../CuboBank/pages/Operacoes.html"
    } 
    
    alert('Usuário ou Senha Inválidos!');
    return erro();
};

form.addEventListener("submit", enviaFormulario);

document.addEventListener("click", event => {
    const element = event.target; 
    if(element.classList.contains("enviar")) enviaFormulario();
});