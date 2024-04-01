if(JSON.parse(localStorage.getItem('tela')) === true) {  // Verifica se '#desligado' foi acionada uma vez, caso sim, ela não aparecerá novamente.
    document.querySelector(".desligado").style.display = "none"; 
    document.querySelector("#conteudo").style.display = "flex"; 
    for(let numero of document.querySelectorAll(".numero")) numero.style.color = "#fff"; // Coloca todas as letras do teclado número em branco.
} else{
    let ligado = false;
    localStorage.setItem('tela', ligado);
    console.log(localStorage.getItem('tela'));
}

document.addEventListener("click", event => {
    const element = event.target;

    if(element.classList.contains("desligado")){
        element.style.opacity = 0
        setTimeout(() => {
            element.style.display = "none";
            document.querySelector("#conteudo").style.display = "flex"
            for(let numero of document.querySelectorAll(".numero")) numero.style.color = "#fff";
        }, 1000);
        
        ligado = true; // Elemento "#desligado" foi acionado.
        localStorage.setItem('tela', ligado); // Guarda essa informação no armazenamento local.
    };
});