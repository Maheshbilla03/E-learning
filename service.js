function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "#041225";
  } else {
    navbar.style.background = "rgba(7, 24, 47, 0.95)";
  }
});