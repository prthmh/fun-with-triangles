const sideInput = document.querySelectorAll(".side-input");
const outputEle = document.querySelector("#output"); 
const hypotenuseBtn = document.querySelector("#hypotenuse");

function calculateSUmOfSquares(a,b){
    const sumOfSquares = a**2 + b**2;
    return sumOfSquares;
}
function calculateHypotenuse() {
    const sumOfSquares = calculateSUmOfSquares(Number(sideInput[0].value), Number(sideInput[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEle.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);