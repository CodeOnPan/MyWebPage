const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const header = document.querySelector(".header");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
  header.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
    header.classList.remove("active");
  })
);
const linkedIn = document.querySelector(".linkedIn");
const gitHub = document.querySelector(".gitHub");
linkedIn.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navBar.classList.remove("active");
  header.classList.remove("active");
});
gitHub.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navBar.classList.remove("active");
  header.classList.remove("active");
});
// Funkcja scrolla //
document.addEventListener('wheel', (event) => {
    if (hamburger.classList.contains("active")) {
        hamburger.classList.remove("active");
        navBar.classList.remove("active");
        header.classList.remove("active");
    }
});
