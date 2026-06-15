function showSignup() {
  document.getElementById("loginBox").classList.remove("active");
  document.getElementById("signupBox").classList.add("active");
}

function showLogin() {
  document.getElementById("signupBox").classList.remove("active");
  document.getElementById("loginBox").classList.add("active");
}

function createAccount() {
  let name = document.getElementById("signupName").value.trim();
  let email = document.getElementById("signupEmail").value.trim();
  let phone = document.getElementById("signupPhone").value.trim();
  let password = document.getElementById("signupPassword").value.trim();

  if (name === "" || email === "" || phone === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPhone", phone);
  localStorage.setItem("userPassword", password);

  alert("Account Created Successfully");

  showLogin();
}

function login() {
  let email = document.getElementById("loginEmail").value.trim();

  let savedEmail = localStorage.getItem("userEmail");

  if (email === savedEmail) {
    alert("Login Successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Email");
  }
}

function togglePassword() {
  let password = document.getElementById("loginPassword");
  password.type = password.type === "password" ? "text" : "password";
}

function toggleSignupPassword() {
  let password = document.getElementById("signupPassword");
  password.type = password.type === "password" ? "text" : "password";
}