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
const phoneButton = document.querySelectorAll(".phone-button");
const overlayPhone = document.querySelector(".phone");
const exitPhone = document.querySelectorAll(".exit-phone");
const chatButton = document.querySelectorAll(".chat-button");
const overlayChat = document.querySelector(".chat");
const exitChat = document.querySelectorAll(".exit-chat");
const readMoreLink = document.getElementById("readMoreLink");
const readLessLink = document.getElementById("readLessLink");
const readMoreLink_swiper = document.getElementById("readMoreLink_swiper");
const readLessLink_swiper = document.getElementById("readLessLink_swiper");
const readMoreLink_swiper_other = document.getElementById(
  "readMoreLink_swiper_other"
);
const readLessLink_swiper_other = document.getElementById(
  "readLessLink_swiper_other"
);
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

readMoreLink_swiper_other.addEventListener("click", function (event) {
  event.preventDefault();
  readMoreLink_swiper_other.style.display = "none";
  readLessLink_swiper_other.style.display = "flex";
});

readLessLink_swiper_other.addEventListener("click", function (event) {
  event.preventDefault();
  readLessLink_swiper_other.style.display = "none";
  readMoreLink_swiper_other.style.display = "flex";
});

readMoreLink_swiper.addEventListener("click", function (event) {
  event.preventDefault();
  readMoreLink_swiper.style.display = "none";
  readLessLink_swiper.style.display = "flex";
});

readLessLink_swiper.addEventListener("click", function (event) {
  event.preventDefault();
  readLessLink_swiper.style.display = "none";
  readMoreLink_swiper.style.display = "flex";
});

phoneButton.forEach((item) => {
  item.addEventListener("click", (e) => {
    overlayPhone.classList.add("show");
    overlayBurger.classList.remove("overlay__open");
    overlay.classList.add("active");
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

exitPhone.forEach((item) => {
  item.addEventListener("click", (e) => {
    overlayPhone.classList.remove("show");
    overlay.classList.remove("active");
  });
});

chatButton.forEach((item) => {
  item.addEventListener("click", (e) => {
    overlayChat.classList.add("show");
    overlayBurger.classList.remove("overlay__open");
    overlay.classList.add("active");
  });
});

exitChat.forEach((item) => {
  item.addEventListener("click", (e) => {
    overlayChat.classList.remove("show");
    overlay.classList.remove("active");
  });
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
