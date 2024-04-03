export default document.addEventListener("click", event => {
    const element = event.target;

    if(element.classList.contains("sair")){
        let confirmacao = window.confirm("deseja sair de sua conta?");
        if(confirmacao === true){
            let ligado = false;
            localStorage.setItem('tela', ligado);
            window.location.href = "../../CuboBank/index.html";
        };
    };

    if(element.classList.contains("limpar")){
        const form = document.querySelector("form");
        form.reset();
    };
});