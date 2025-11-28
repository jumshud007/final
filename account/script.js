
const ul = document.getElementsByClassName("ull")[0];

function burger() {
  if (ul.style.display === "block") {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
}