
let userInp = document.getElementById("userInp");
let passInp = document.getElementById("passInp");
let confirm_passInp = document.getElementById("confirm_passInp");
let login_btn = document.getElementById("login_btn");
let userLogInp = document.getElementById("userLogInp");
let userPassInp = document.getElementById("userPassInp");
let btn =document.getElementsByClassName("button")[1];
let name =document.getElementById("span1");
let password =document.getElementById("span2");
let email =document.getElementById("span3");
let username =document.getElementById("span4");
login_btn.addEventListener("click", () => {
    let username = userLogInp.value;
    let password = userPassInp.value;
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");
    if (username === storedUsername && password === storedPassword) {
        alert("You have successfully logged in! press the button to got to homepage");
        btn.style.display="block"
    } else {
        alert("Invalid username or password!");
    }       
})
const ul = document.getElementsByClassName("ull")[0];

function burger() {
  if (ul.style.display === "block") {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
}