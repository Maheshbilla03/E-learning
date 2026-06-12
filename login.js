function showSignup(){
document.getElementById("loginBox").classList.remove("active");
document.getElementById("signupBox").classList.add("active");
}

function showLogin(){
document.getElementById("signupBox").classList.remove("active");
document.getElementById("loginBox").classList.add("active");
}

function createAccount(){

let name=document.getElementById("signupName").value;
let email=document.getElementById("signupEmail").value;
let phone=document.getElementById("signupPhone").value;
let password=document.getElementById("signupPassword").value;

if(name===""||email===""||phone===""||password===""){
alert("Please fill all fields");
return;
}

localStorage.setItem("userName",name);
localStorage.setItem("userEmail",email);
localStorage.setItem("userPhone",phone);
localStorage.setItem("userPassword",password);

alert("Account Created Successfully");

showLogin();

document.getElementById("signupName").value="";
document.getElementById("signupEmail").value="";
document.getElementById("signupPhone").value="";
document.getElementById("signupPassword").value="";
}

function login(){

let email=document.getElementById("loginEmail").value;
let password=document.getElementById("loginPassword").value;

let savedEmail=localStorage.getItem("userEmail");
let savedPassword=localStorage.getItem("userPassword");

if(email===savedEmail && password===savedPassword){

alert("Login Successful");

window.location.href="dashboard.html";

}else{
alert("Invalid Email or Password");
}
}
function login() {

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let savedEmail = localStorage.getItem("userEmail");
  let savedPassword = localStorage.getItem("userPassword");

  if(email === savedEmail && password === savedPassword) {

    alert("Login Successful!");

    window.location.href = "dashboard.html";

  } else {
    alert("Invalid Email or Password");
  }
}