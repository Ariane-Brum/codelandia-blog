const button = document.querySelectorAll(".botao");

button.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("like");
  });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});

ScrollReveal().reveal(".container-post", { delay: 200 });
ScrollReveal().reveal(".date", { delay: 400 });
ScrollReveal().reveal(".title", { delay: 500 });
ScrollReveal().reveal(".desc", { delay: 600 });
