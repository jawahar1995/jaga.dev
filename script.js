const menu = document.getElementById("menu"),
  links = document.getElementById("links");

menu.onclick = () => links.classList.toggle("open");

// Close menu when a nav link is clicked
links.querySelectorAll("a").forEach(a => {
  a.onclick = () => links.classList.remove("open");
});

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Sticky header shadow on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 10
    ? "0 2px 20px rgba(0,0,0,0.5)"
    : "none";
});
