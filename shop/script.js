let star1 =document.getElementsByClassName("stars")[0];
let star2 =document.getElementsByClassName("stars")[1];
let star3 =document.getElementsByClassName("stars")[2];
let star4 =document.getElementsByClassName("stars")[3];
let card1 =document.getElementsByClassName("cards")[0];
let card2 =document.getElementsByClassName("cards")[1];
let card3 =document.getElementsByClassName("cards")[2];
let card4 =document.getElementsByClassName("cards")[3];
function function1(){
    if(    star1.textContent =="⭐⭐⭐⭐⭐"){card1.style.display="block"}else{card1.style.display="none"}
    if(    star2.textContent =="⭐⭐⭐⭐⭐"){card2.style.display="block"}else{card2.style.display="none"}
    if(    star3.textContent =="⭐⭐⭐⭐⭐"){card3.style.display="block"}else{card3.style.display="none"}
    if(    star4.textContent =="⭐⭐⭐⭐⭐"){card4.style.display="block"}else{card4.style.display="none"}

}
function function2(){
    if(    star1.textContent =="⭐⭐⭐⭐"){card1.style.display="block"}else{card1.style.display="none"}
    if(    star2.textContent =="⭐⭐⭐⭐"){card2.style.display="block"}else{card2.style.display="none"}
    if(    star3.textContent =="⭐⭐⭐⭐"){card3.style.display="block"}else{card3.style.display="none"}
    if(    star4.textContent =="⭐⭐⭐⭐"){card4.style.display="block"}else{card4.style.display="none"}

}
function function3(){
    if(    star1.textContent =="⭐⭐⭐"){card1.style.display="block"}else{card1.style.display="none"}
    if(    star2.textContent =="⭐⭐⭐"){card2.style.display="block"}else{card2.style.display="none"}
    if(    star3.textContent =="⭐⭐⭐"){card3.style.display="block"}else{card3.style.display="none"}
    if(    star4.textContent =="⭐⭐⭐"){card4.style.display="block"}else{card4.style.display="none"}
}
function function4(){
    if(    star1.textContent =="⭐⭐"){card1.style.display="block"}else{card1.style.display="none"}
    if(    star2.textContent =="⭐⭐"){card2.style.display="block"}else{card2.style.display="none"}
    if(    star3.textContent =="⭐⭐"){card3.style.display="block"}else{card3.style.display="none"}
    if(    star4.textContent =="⭐⭐"){card4.style.display="block"}else{card4.style.display="none"}
}function function5(){
    if(    star1.textContent =="⭐"){card1.style.display="block"}else{card1.style.display="none"}
    if(    star2.textContent =="⭐"){card2.style.display="block"}else{card2.style.display="none"}
    if(    star3.textContent =="⭐"){card3.style.display="block"}else{card3.style.display="none"}
    if(    star4.textContent =="⭐"){card4.style.display="block"}else{card4.style.display="none"}
}
function functionn1() {
    card1.style.display ="block"
    card2.style.display ="none"
    card3.style.display ="none"
    card4.style.display ="none"
}

function functionn2() {
    card2.style.display ="block"
    card1.style.display ="none"
    card3.style.display ="none"
    card4.style.display ="none"
}
function functionn3() {
    card3.style.display ="block"
    card2.style.display ="none"
    card1.style.display ="none"
    card4.style.display ="none"
}
function functionn4() {
    card4.style.display ="block"
    card2.style.display ="none"
    card3.style.display ="none"
    card1.style.display ="none"
}
const ul = document.getElementsByClassName("ull")[0];

function burger() {
  if (ul.style.display === "block") {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
}