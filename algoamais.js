const botao = document.getElementById("btn-cta");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
mensagem.textContent = "Ligue para (42) 90000-0000 e fale com a gente.";
});