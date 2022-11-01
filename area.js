const sideInput = document.querySelectorAll(".side-input");
const outputEle = document.querySelector("#output");
const areaBtn = document.querySelector("#area-btn");

function calculateProduct(a,b){
    const product = a*b;
    return product;
}
function calculateArea() {
    const product = calculateProduct(Number(sideInput[0].value), Number(sideInput[1].value));
    const aOfTriangle = product/2;
    outputEle.innerText = "The area of triangle is " + aOfTriangle;
    
}

areaBtn.addEventListener("click", calculateArea);