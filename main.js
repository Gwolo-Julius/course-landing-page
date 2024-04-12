/* =========== SHOW MENU ============== */

const bars = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__menu");
const linkActions = document.querySelectorAll(".nav__link");

const openNavLinks = () => {
  navLinks.style.right = "0";
};
bars.addEventListener("click", openNavLinks);

/* =========== HIDE MENU ============== */
const closeBtn = document.querySelector(".nav__close");

const closeNavLinks = () => {
  navLinks.style.right = "-100%";
};
closeBtn.addEventListener("click", closeNavLinks);

/* =========== LINKACTION REMOVES MENU ============== */
linkActions.forEach((link) => {
  link.addEventListener("click", closeNavLinks);
});
/* =========== CHANGE BACKGROUND HEADER============== */

const scrollHeader = () => {
  const header = document.querySelector(".header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};

window.addEventListener("scroll", scrollHeader);

(() => {
  "use strict";

  const lightBtn = document.querySelector(".ri-sun-line");
  const darkBtn = document.querySelector(".ri-moon-line");
  const bodyEl = document.querySelector("body");
  const footer = document.querySelector("footer");

  lightBtn.addEventListener("click", () => {
    darkBtn.style.display = "block";
    lightBtn.style.display = "none";
    bodyEl.classList.add("dark__mode__theme");
    footer.style.backgroundColor = "var(--black-color)";
  });
  darkBtn.addEventListener("click", () => {
    darkBtn.style.display = "none";
    lightBtn.style.display = "block";
    footer.style.backgroundColor = "";
    bodyEl.classList.remove("dark__mode__theme");
  });
  // console.log(lightBtn, darkBtn);
})();
