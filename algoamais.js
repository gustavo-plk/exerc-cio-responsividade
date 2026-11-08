const botao = document.getElementById("btn-cta");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
mensagem.textContent = "Ligue para (42) 90000-0000 e fale com a gente.";
});

const btnTema = document.getElementById("btn-tema");
const raiz = document.documentElement;

function aplicarTema(tema) {
if (tema === "claro") {
raiz.setAttribute("data-tema", "claro");
btnTema.textContent = "🌙 Tema escuro";
} else {
raiz.removeAttribute("data-tema");
btnTema.textContent = "☀️ Tema claro";
}
}

aplicarTema(localStorage.getItem("tema") || "escuro");

btnTema.addEventListener("click", function () {
const novoTema = raiz.getAttribute("data-tema") === "claro" ? "escuro" : "claro";
aplicarTema(novoTema);
localStorage.setItem("tema", novoTema);
});