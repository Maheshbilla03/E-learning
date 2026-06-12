function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let course = document.getElementById("course").value;
  let message = document.getElementById("message").value.trim();
  let formMsg = document.getElementById("formMsg");

  if (name === "" || email === "" || phone === "" || course === "" || message === "") {
    formMsg.style.color = "#ff4d4d";
    formMsg.innerText = "Please fill all fields.";
    return;
  }

  formMsg.style.color = "#00ffae";
  formMsg.innerText = "Message sent successfully!";

  document.getElementById("contactForm").reset();
});