import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
Swiper.use([Pagination]);
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  observer: true,
  breakpoints: {
    1119: {
      enabled: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

const burgerButton = document.querySelector(".burger");
const overlayBurger = document.querySelector(".desktop__header");
const exitButton = document.querySelector(".exit");
const phoneButton = document.querySelector(".phone-button");
const overlayPhone = document.querySelector(".phone");
const exitPhone = document.querySelector(".exit-phone");
const chatButton = document.querySelector(".chat-button");
const overlayChat = document.querySelector(".chat");
const exitChat = document.querySelector(".exit-chat");

burgerButton.addEventListener("click", () => {
  overlayBurger.classList.add("overlay__open");
});

exitButton.addEventListener("click", () => {
  overlayBurger.classList.remove("overlay__open");
});

phoneButton.addEventListener("click", () => {
  overlayPhone.classList.add("show");
});

exitPhone.addEventListener("click", () => {
  overlayPhone.classList.remove("show");
  document.body.style.overflow = "auto";
});

chatButton.addEventListener("click", () => {
  overlayChat.classList.add("show");
});

exitChat.addEventListener("click", () => {
  overlayChat.classList.remove("show");
  document.body.style.overflow = "auto";
});
