let nameInp = document.getElementById("nameInp");
let userInp = document.getElementById("userInp");
let emailInp = document.getElementById("emailInp");
let passInp = document.getElementById("passInp");
let signUp_btn = document.getElementById("signUp_btn");

signUp_btn.addEventListener("click", () => {
    let name = nameInp.value;
    let username = userInp.value;
    let email = emailInp.value;
    let password = passInp.value;
    if (name === "" || username === "" || email === "" || password === "") {
        alert("Запоплните все поля!");
    } else {
        localStorage.setItem("name", name);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("You have successfully signed up!");
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