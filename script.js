const btn = document.getElementById("btn-menu");
const navbar = document.getElementById("navbar");

btn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
