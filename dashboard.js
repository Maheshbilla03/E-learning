function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

const sideLinks = document.querySelectorAll(".side-menu a");

sideLinks.forEach(link => {
  link.addEventListener("click", function () {
    sideLinks.forEach(item => item.classList.remove("active"));
    this.classList.add("active");

    if (window.innerWidth <= 900) {
      document.getElementById("sidebar").classList.remove("active");
    }
  });
});

document.addEventListener("click", function (e) {
  const nav = document.getElementById("navLinks");
  const menu = document.querySelector(".menu");

  if (!nav.contains(e.target) && !menu.contains(e.target)) {
    nav.classList.remove("active");
  }
});