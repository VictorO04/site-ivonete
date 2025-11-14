const btnTema = document.getElementById("btn-tema");
const body = document.body;

btnTema.addEventListener("click", () => {
    if (body.classList.contains("claro")) {
        body.classList.replace("claro", "escuro");
        btnTema.textContent = "☀️";
    } else {
        body.classList.replace("escuro", "claro");
        btnTema.textContent = "🌙";
    }
});