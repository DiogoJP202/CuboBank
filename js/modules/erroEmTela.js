export default () => {
    let tela = document.querySelector("#tela");
    tela.classList.add("erro");
    setTimeout(() => tela.classList.remove("erro"), 600);
};