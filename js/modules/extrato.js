import opcoes from "./opcoes.js";

const extrato = document.querySelectorAll(".textoExtrato");
let extratoArmazenados = JSON.parse(localStorage.getItem("usuarios"))[localStorage.getItem("posicaoUsuario")].extrato;
let contador = 0;
const valores = [];

for(let valor of extrato) valores.push(valor.innerHTML);
for(let valor of extratoArmazenados) valores.push(valor);

if(extratoArmazenados) for(let valorExtrato of extratoArmazenados) valores.push(valorExtrato);

let extratos = [];
let posicaoExtrato = 0;

for(let contador = 1; contador <= Math.ceil(valores.length / 5); contador++){ // A cada 5 valores do array 'valores', adiciona 1 array com esses valores na matrix de arrays 'extratos'.
    extratos.push([]);

    for(let i = 0; i < 5 ; i++){
        if(valores[i]){
            extratos[contador - 1].push(valores[posicaoExtrato])
            posicaoExtrato++;
        };
    };
};

document.addEventListener("click", event => {
    const element = event.target;

    if(element.classList.contains("active")) return window.location.href = "../../pages/Operacoes.html";

    if(element.classList.contains("left")){
        if(contador === 0) return;
        let elemento = 0;
        contador --;
        for(let valor of extratos[contador]){
            extrato[elemento].innerHTML = valor;
            elemento ++;
        }
        return;
    };

    if(element.classList.contains("right")){
        if(contador === Math.ceil(valores.length / 5) - 1) return;
        let elemento = 0;
        contador ++;
        for(let valor of extratos[contador]){
            extrato[elemento].innerHTML = valor;
            elemento ++;
        }
        return;
    };
});