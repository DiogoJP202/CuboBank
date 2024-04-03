export let posicao = document.querySelectorAll("input");
export let contador = 0;
export let input = posicao[contador];

export default document.addEventListener('click', event => {
    const element = event.target;

    if(element.classList.contains("left")){
        if(contador > 0) contador--;
        posicao[contador].select();
        input = posicao[contador];
        return;
    };

    if(element.classList.contains("right")){
        if(contador < posicao.length - 2) contador++;
        posicao[contador].select();
        input = posicao[contador];
        return;
    };

    if(element.classList.contains("numero")){
        if(contador > 0 && posicao[contador].value.length == 4) return;
        posicao[contador].value += element.innerText;
    };
});
