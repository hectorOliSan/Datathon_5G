// Toggle de tema claro y oscuro

const theme = document.getElementById("theme");
const btn_theme = document.getElementById("btn_theme");

const light = document.getElementById("btn_light");
const dark = document.getElementById("btn_dark");

light.addEventListener("click", function () {
  theme.setAttribute("data-bs-theme", "light");
  btn_theme.classList.replace("bi-moon-stars", "bi-brightness-high");
});

dark.addEventListener("click", function () {
  theme.setAttribute("data-bs-theme", "dark");
  btn_theme.classList.replace("bi-brightness-high", "bi-moon-stars");
});
