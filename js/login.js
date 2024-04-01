import adicionarUsuarioPadrao from "./moduloUsuarioPadrao.js";
adicionarUsuarioPadrao();
// window.alert("Usuário Padrão: admin, senha: 3589");

const form = document.querySelector("form"); 

form.addEventListener("submit", event => {
    event.preventDefault();

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

    // return window.location.href = "../pages/Login.html"; // Muda o a página atual para a de login.
    validado === true ? alert('Login existente!') : alert('Login Inexistente!');
});