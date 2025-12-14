var typed = new Typed("#desc", {
  strings: ["Front-End Developer"],
  typeSpeed: 50,
  loop: true,
  backSpeed: 100,
  showCursor: false,
  backDelay: 1000,
});

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    icon.className = "bx bx-x";
  } else {
    icon.className = "bx bx-menu";
  }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    icon.className = "bx bx-menu";
  });
});
