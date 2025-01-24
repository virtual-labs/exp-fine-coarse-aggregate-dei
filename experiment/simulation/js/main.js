//Your JavaScript goes in here
const nextToStep1 = document.querySelector("#nextToStep1");

addEventListener("DOMContentLoaded", (evt) => {
    nextToStep1.style.visibility = "visible";
})

nextToStep1.addEventListener("click", (evt) => {
    window.location.href = "./problemselection.html";
})