export default () => {
    if(!localStorage.getItem('usuarios')){
        const usuarios = [{usuario: 'admin', senha: '3589', saldo: 100000}]; // Adiciona um usuário pré-configurado. 
        let JSONUsuarios = JSON.stringify(usuarios);
        localStorage.setItem('usuarios', JSONUsuarios);
    };
};