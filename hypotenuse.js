const sideInput = document.querySelectorAll(".side-input");
const outputEle = document.querySelector("#output"); 
const hypotenuseBtn = document.querySelector("#hypotenuse");
const message = document.querySelector("#error");

function calculateSUmOfSquares(a,b){
    hideMessage();
    if(a>=0 && b>=0){
    const sumOfSquares = a**2 + b**2;
    return sumOfSquares;
    } else {
        showMessage("Please enter positive values.")
    }
}
function calculateHypotenuse() {
    const sumOfSquares = calculateSUmOfSquares(Number(sideInput[0].value), Number(sideInput[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEle.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);