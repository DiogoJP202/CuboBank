import adicionarUsuarioPadrao from "./moduloUsuarioPadrao.js";
import opcoes from "./opcoes.js";
import teclado, {contador, input, posicao} from "./teclado.js";

adicionarUsuarioPadrao();
// window.alert("Usuário Padrão: admin, senha: 3589");

const form = document.querySelector("form"); 

const enviaFormulario = event => {
    if(event !== undefined) event.preventDefault();

    let usuario = document.querySelector("#Iusuario").value;
    let senha =  document.querySelector("#Isenha").value;
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    let validado = false;

    for(let user of usuarios){ // Verifica os nomes de usuários do armazenamento local
        if(user.usuario === usuario && user.senha === senha){
            validado = true;
            continue;
        };
    };

    validado === true ? window.location.href = "../pages/Login.html" : alert('Usuário ou Senha Inválidos!');
};

form.addEventListener("submit", enviaFormulario);