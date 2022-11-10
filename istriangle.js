const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEle = document.querySelector("#output");
const message = document.querySelector("#error");

function calsumOfAngles(a1,a2,a3){
    hideMessage();
    if(a1>=0 && a2>=0 && a3>=0){
    const sumOfAngles = a1+a2+a3;
    return sumOfAngles;
    } else {
        showMessage("Please enter positive angle values.");
    }
}
function isTriangle(){
    const sumOfAngles = calsumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputEle.innerText = "Good, The angles form a triangle.";
    }
    else{
        outputEle.innerText = "Sorry, These angles do not form a triangle." ;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}

isTriangleBtn.addEventListener("click", isTriangle)