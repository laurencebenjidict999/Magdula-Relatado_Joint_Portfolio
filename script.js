// ===== NAVBAR TOGGLE =====
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
const themeToggle = document.querySelector("#theme-toggle");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-x");
  navbar.classList.toggle("active");
});

// Make sidebar scrollable on mobile
navbar.style.overflowY = "auto";
navbar.style.maxHeight = "80vh";

// ===== SMOOTH SCROLL + ACTIVE LINK =====
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("href");
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });

    navbar.classList.remove("active");
    menu.classList.remove("fa-x");

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ===== PROFILE SLIDESHOW =====
const images = ["profile-1", "profile-2"];
let current = 0;

setInterval(() => {
  const prev = document.getElementById(images[current]);
  if (prev) prev.classList.remove("active");

  current = (current + 1) % images.length;

  const next = document.getElementById(images[current]);
  if (next) next.classList.add("active");

}, 3000);

// ===== TYPEWRITER EFFECT =====
const words = ["Web Developer", "IT Support Specialist", "Web Designer"];
let i = 0, j = 0, currentWord = "", isDeleting = false;
const typewriter = document.querySelector(".typewriter");

function type() {

  if (!typewriter) return;

  if (i >= words.length) i = 0;

  currentWord = words[i];

  if (isDeleting) {

    typewriter.textContent = currentWord.substring(0, j--);

    if (j < 0) {
      isDeleting = false;
      i++;
      j = 0;
    }

  } else {

    typewriter.textContent = currentWord.substring(0, j++);

    if (j > currentWord.length) {
      isDeleting = true;
    }

  }

  setTimeout(type, isDeleting ? 50 : 150);
}

type();

// ===== DARK / LIGHT THEME =====
themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeToggle.textContent = "Dark Mode";
  } else {
    themeToggle.textContent = "Light Mode";
  }

});