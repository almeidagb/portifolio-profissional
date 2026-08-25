
const datainicio = new Date("2024-02-19")
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

    const tempoTotal = dataFinal - datainicio;
    const tempoPassado = dataAtual - datainicio;

    const porcentagem = (tempoPassado / tempoTotal) * 100;

    const porcentagem_texto = document.querySelector(".porcentagem");
    const barra = document.querySelector(".progresso_avanco");

    barra.style.width = porcentagem + "%";
    porcentagem_texto.textContent = porcentagem.toFixed(1) + "%";
}
barra_progresso();
setInterval(barra_progresso, 1000);

