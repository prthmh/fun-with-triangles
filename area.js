const sideInput = document.querySelectorAll(".side-input");
const outputEle = document.querySelector("#output");
const areaBtn = document.querySelector("#area-btn");
const message = document.querySelector("#error");

function calculateProduct(a, b) {
  hideMessage();
  if(a>=0 && b>=0){
  const product = a * b;
  return product;
  } else {
    showMessage("Please enter positive values.")
  }
}
function calculateArea() {
  const product = calculateProduct(
    Number(sideInput[0].value),
    Number(sideInput[1].value)
  );
  const aOfTriangle = product / 2;
  outputEle.innerText = "The area of triangle is " + aOfTriangle;
}

function hideMessage(){
  message.style.display = "none";
}

function showMessage(msg){
  message.style.display = "block";
  message.innerText = msg;
}
areaBtn.addEventListener("click", calculateArea);
