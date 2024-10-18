const burgerButton = document.querySelector(".burger");
const overlay = document.querySelector(".desktop__header");
const menu = document.querySelector(".desktop__header");

burgerButton.addEventListener("click", () => {
  overlay.classList.add("overlay__open");
});
