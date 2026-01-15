


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


const toggle = document.getElementById('themeToggle');
const icon = document.getElementById('icon');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  icon.textContent = '🌙';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update icon
  if (body.classList.contains('dark-mode')) {
    icon.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.textContent = '☀';
    localStorage.setItem('theme', 'light');
  }
});

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// aabout container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// product contaainer
ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  interval: 500,
});

// article contaainer
ScrollReveal().reveal(".article__card", {
  ...scrollRevealOption,
  interval: 500,
});


