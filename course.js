function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

const navLinks = document.querySelectorAll("#navLinks a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});