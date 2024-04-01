import adicionarUsuarioPadrao from "./moduloUsuarioPadrao.js";
import opcoes from "./opcoes.js";
import teclado, {contador, input, posicao} from "./teclado.js";

adicionarUsuarioPadrao();

const form = document.querySelector("form"); 

const enviaFormulario = event => {
    if(event !== undefined) event.preventDefault();

    let usuario = document.querySelector("#Iusuario").value;
    let senha =  document.querySelector("#Isenha").value;
    let repeticaoSenha = document.querySelector("#IrepetirSenha").value;
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));

    if(usuario.length < 4) return alert("Nome de usuário inválido!");
    if(senha.length < 4 || senha.length > 4) return alert("Senha Inválida!");
    if(repeticaoSenha !== senha) return alert("As senhas precisam ser iguais!");
    if(!Number(senha)) return alert("A senha precisa ser composta de apenas números!");

    for(let user of usuarios){ // Verifica os nomes de usuários do armazenamento local
        if(user.usuario === usuario) return alert("Usuário já cadastrado!");
    };
    
    usuarios.push({usuario: usuario, senha: senha, saldo: 100000});
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Adiciona as informações do usuário para o armazenamento local.

    alert('Usuário cadastrado com sucesso!');
    window.location.href = "../pages/Login.html"; // Muda o a página atual para a de login.
};

form.addEventListener("submit", enviaFormulario);