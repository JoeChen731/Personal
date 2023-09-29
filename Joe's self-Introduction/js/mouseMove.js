// script.js
const hoverElement = document.querySelector(".hover-element");

hoverElement.addEventListener("mouseenter", () => {
  hoverElement.style.transition = "transform 0.3s ease";
});

hoverElement.addEventListener("mouseleave", () => {
  hoverElement.style.transition = "transform 0.3s ease";
  hoverElement.style.transform = "scale(1)";
});
