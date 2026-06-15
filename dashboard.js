function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuIcon = document.getElementById("menuIcon");

  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuIcon.innerHTML = "✕";
  } else {
    menuIcon.innerHTML = "☰";
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
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
  const menu = document.getElementById("menuIcon");

  if (nav && menu && !nav.contains(e.target) && !menu.contains(e.target)) {
    nav.classList.remove("active");
    menu.innerHTML = "☰";
  }
});