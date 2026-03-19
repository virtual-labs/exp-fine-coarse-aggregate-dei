// STEP 1

// const nextToStep1 = document.querySelector("#nextToStep1");

const step1 = document.querySelector("#step1");
const instructionsStep1 = document.querySelector("#instructionsStep1");
const stepNumber = document.querySelector("#step-number");

// images of step1
const png1Step1 = document.querySelector("#png1Step1");
const png2Step1 = document.querySelector("#png2Step1");
const png3Step1 = document.querySelector("#png3Step1");
const png4Step1 = document.querySelector("#png4Step1");

// gifs of step1
const gif1Step1 = document.querySelector("#gif1Step1");
const gif2Step1 = document.querySelector("#gif2Step1");
const gif3Step1 = document.querySelector("#gif3Step1");
const gif4Step1 = document.querySelector("#gif4Step1");
const gif5Step1 = document.querySelector("#gif5Step1");
const gif6Step1 = document.querySelector("#gif6Step1");

// arrows of step1
const arrNext = document.querySelector(".arr-next");
const arr1Step1 = document.querySelector("#arr1Step1");
const arr2Step1 = document.querySelector("#arr2Step1");
const arr3Step1 = document.querySelector("#arr3Step1");
const arr4Step1 = document.querySelector("#arr4Step1");
const arr5Step1 = document.querySelector("#arr5Step1");
const arr6Step1 = document.querySelector("#arr6Step1");
const arr7Step1 = document.querySelector("#arr7Step1");

// transboxes of step1
const trans1Step1 = document.querySelector("#trans1Step1");
const trans2Step1 = document.querySelector("#trans2Step1");
const trans3Step1 = document.querySelector("#trans3Step1");
const trans4Step1 = document.querySelector("#trans4Step1");
const trans5Step1 = document.querySelector("#trans5Step1");
const trans6Step1 = document.querySelector("#trans6Step1");

// buttons of step 2
const assemBtnStep1 = document.querySelector("#assembleStep1");
// const nextToStep2 = document.querySelector("#nextToStep2");

addEventListener("DOMContentLoaded", (evt) => {
    step1.style.visibility = "visible";
    instructionsStep1.textContent = "Assemble the sieves in descending order with the largest aperture size sieve at the top and the smallest at the bottom. Place a pan below the bottom most sieve.";
    stepNumber.textContent = "1";
    png1Step1.style.visibility = "visible";
    assemBtnStep1.style.visibility = "visible";
    arr1Step1.style.visibility = "visible";
});

assemBtnStep1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr1Step1.style.visibility = "hidden";
    png1Step1.style.visibility = "hidden";

    gif1Step1.style.visibility = "visible";

    setTimeout(() => {
        instructionsStep1.textContent = "Pour the aggregates into the sieve stack."
        stepNumber.textContent = "2";
        gif1Step1.style.visibility = "hidden";
        png2Step1.style.visibility = "visible";
        arr2Step1.style.visibility = "visible";
        trans1Step1.style.visibility = "visible";
    }, 13000);
});

trans1Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr2Step1.style.visibility = "hidden";
    png2Step1.style.visibility = "hidden";

    gif2Step1.style.visibility = "visible";

    setTimeout(()=>{
        gif2Step1.style.visibility = "hidden";
        instructionsStep1.textContent = "Cover the sieve stack with the lid and place it on the sieve shaker. Start the sieve shaker and wait for sometime."
        stepNumber.textContent = "2";
        png3Step1.style.visibility = "visible";
        arr3Step1.style.visibility = "visible";
        trans2Step1.style.visibility = "visible";
    }, 9000);
});

trans2Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step1.style.visibility = "hidden";
    png3Step1.style.visibility = "hidden";

    gif3Step1.style.visibility = "visible";

    setTimeout(() => {
        arr4Step1.style.visibility = "visible";
        trans3Step1.style.visibility = "visible";
    }, 2000);
});

trans3Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr4Step1.style.visibility = "hidden";
    gif3Step1.style.visibility = "hidden";

    gif4Step1.style.visibility = "visible";

    setTimeout(() => {
        arr5Step1.style.visibility = "visible";
        trans4Step1.style.visibility = "visible";
    }, 5000);
});

trans4Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step1.style.visibility = "hidden";
    gif4Step1.style.visibility = "hidden";

    gif5Step1.style.visibility = "visible";

    setTimeout(() => {
        arr6Step1.style.visibility = "visible";
        trans5Step1.style.visibility = "visible";
    }, 10000);
});

trans5Step1.addEventListener("click", (evt) =>{
    evt.target.style.visibility = "hidden";
    arr6Step1.style.visibility = "hidden";
    gif5Step1.style.visibility = "hidden";

    gif6Step1.style.visibility = "visible";

    setTimeout(()=>{
        instructionsStep1.textContent = "Remove the sieves from the sieve shaker and note down the aggregates retained on each sieve.";
        stepNumber.textContent = "2";
        arr7Step1.style.visibility = "visible";
        trans6Step1.style.visibility = "visible";
    }, 5000);
});

trans6Step1.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr7Step1.style.visibility = "hidden";
    gif6Step1.style.visibility = "hidden"

    png4Step1.style.visibility = "visible";

    setTimeout(() => {
        nextToStep2.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 2000);
});

// nextToStep2.addEventListener("click", (evt) => {
//     window.location.href = "/simulation/steps-files/coarse-aggregate/step3.html";
// });