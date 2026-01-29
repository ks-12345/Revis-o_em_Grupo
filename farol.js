const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");

let modo = "manual";
let intervalo = null;

// Apaga todas as luzes
function apagarLuzes() {
  vermelho.style.opacity = 0.3;
  amarelo.style.opacity = 0.3;
  verde.style.opacity = 0.3;
}

// Ativa uma luz específica
function ativarLuz(cor) {
  apagarLuzes();
  if (cor === "vermelho") vermelho.style.opacity = 1;
  if (cor === "amarelo") amarelo.style.opacity = 1;
  if (cor === "verde") verde.style.opacity = 1;
}

// Modo manual → exemplo: libera a via
function manual() {
  modo = "manual";
  clearInterval(intervalo);
  ativarLuz("verde");
}

// Modo automático → alterna verde → amarelo → vermelho
function auto() {
  modo = "automatico";
  clearInterval(intervalo);
  let estado = 0;

  intervalo = setInterval(() => {
    switch (estado) {
      case 0:
        ativarLuz("verde");
        break;
      case 1:
        ativarLuz("amarelo");
        break;
      case 2:
        ativarLuz("vermelho");
        break;
    }
    estado = (estado + 1) % 3;
  }, 2000);
}

// Modo alerta → pisca amarelo
function alerta() {
  modo = "alerta";
  clearInterval(intervalo);
  let ligado = false;

  intervalo = setInterval(() => {
    apagarLuzes();
    if (ligado) ativarLuz("amarelo");
    ligado = !ligado;
  }, 500);
}

// Modo desligado → todas as luzes apagadas
function off() {
  modo = "off";
  clearInterval(intervalo);
  apagarLuzes();
}
