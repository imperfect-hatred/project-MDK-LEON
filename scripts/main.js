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
const readMoreLink = document.getElementById("readMoreLink");
const readLessLink = document.getElementById("readLessLink");
const overlay = document.querySelector(".opacity-background");
const navItems = document.querySelectorAll(".desktop__header--mid li a");

/* adding class active on click menu item */

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    navItems.forEach((el) => {
      el.classList.remove("link__active");
    });
    item.classList.add("link__active");
  });
});

burgerButton.addEventListener("click", () => {
  overlayBurger.classList.add("overlay__open");
  overlay.classList.add("active");
});

exitButton.addEventListener("click", () => {
  overlayBurger.classList.remove("overlay__open");
  overlay.classList.remove("active");
});

phoneButton.addEventListener("click", () => {
  overlayPhone.classList.add("show");
  overlay.classList.add("active");
});

exitPhone.addEventListener("click", () => {
  overlayPhone.classList.remove("show");
  overlayBurger.classList.remove("overlay__open");
  overlay.classList.remove("active");
});

chatButton.addEventListener("click", () => {
  overlayChat.classList.add("show");
  overlay.classList.add("active");
});

exitChat.addEventListener("click", () => {
  overlayChat.classList.remove("show");
  overlayBurger.classList.remove("overlay__open");
  overlay.classList.remove("active");
});

readMoreLink.addEventListener("click", function (event) {
  event.preventDefault();
  moreText.style.display = "flex";
  moreText.style.flexDirection = "column";
  readMoreLink.style.display = "none";
  readLessLink.style.display = "flex";
});

readLessLink.addEventListener("click", function (event) {
  event.preventDefault();
  moreText.style.display = "none";
  readMoreLink.style.display = "flex";
  readLessLink.style.display = "none";
});
