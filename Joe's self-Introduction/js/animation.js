const animationContainer = document.querySelector(".animation-container");
const linkToHome = document.querySelector("a");

animationContainer.addEventListener("click", () => {
  // Redirect to the home page when the animation container is clicked
  window.location.href = "home.html";
});

// Show the link after a delay (adjust the delay time as needed)
setTimeout(() => {
  linkToHome.style.display = "block";
}, 2000); // 2000 milliseconds (2 seconds) delay in this example
