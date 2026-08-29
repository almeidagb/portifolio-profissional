
const dataInicio = new Date("2024-02-19")
const dataFinal = new Date("2027-12-31");

function cronometro() {
    const data_atual = new Date(); 
    let anos = dataFinal.getFullYear() - data_atual.getFullYear();
    let meses = dataFinal.getMonth() - data_atual.getMonth();
    let dias = dataFinal.getDate() - data_atual.getDate();

    // Ajusta os dias quando necessário
    if (dias < 0) {
        meses--;

        const ultimoDiaMesAnterior = new Date(
            dataFinal.getFullYear(),
            dataFinal.getMonth(),
            0
        ).getDate();

        dias += ultimoDiaMesAnterior;
    }

    // Ajusta os meses
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    document.querySelector("#anos").textContent = anos;
    document.querySelector("#meses").textContent = meses;
    document.querySelector("#dias").textContent = dias;
}

cronometro();
setInterval(cronometro, 1000);

 function barra_progresso() {

    const dataAtual = new Date();

    const tempoTotal = dataFinal - dataInicio;
    const tempoPassado = dataAtual - dataInicio;

    const porcentagem = (tempoPassado / tempoTotal) * 100;

    const porcentagemTexto = document.querySelector(".porcentagem");
    const barra = document.querySelector(".progresso_avanco");

    // Mostra a porcentagem atual
    porcentagemTexto.textContent = porcentagem.toFixed(1) + "%";

    // Garante que começa em 0
    barra.style.width = "0%";

    // Espera a página renderizar o 0% antes de aumentar
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            barra.style.width = porcentagem + "%";
        });
    });
}


const secao = document.querySelector("#formacao");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            barra_progresso();
        }

    });

}, {
    threshold: 0.5
});

observador.observe(secao);


const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});git

