const botao = document.getElementById("btn-cta");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
  mensagem.textContent = "Obrigado! Ligue para (42) 99999-9999 e fale com a gente.";
});