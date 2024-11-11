const burgerButton = document.querySelector(".burger");
const overlay = document.querySelector(".desktop__header");
const exitButton = document.querySelector(".exit");

burgerButton.addEventListener("click", () => {
  overlay.classList.add("overlay__open");
});

exitButton.addEventListener("click", () => {
  overlay.classList.remove("overlay__open");
});
