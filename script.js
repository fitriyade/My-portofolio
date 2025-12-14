// Typed.js for hero section
var typed = new Typed("#desc", {
  strings: ["Front-End Developer"],
  typeSpeed: 50,
  loop: true,
  backSpeed: 100,
  showCursor: false,
  backDelay: 1000,
});

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    navMenu.classList.remove("active");
  }
});
