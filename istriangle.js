const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEle = document.querySelector("#output");

function calsumOfAngles(a1,a2,a3){
    const sumOfAngles = a1+a2+a3;
    return sumOfAngles;
}
function isTriangle(){
    const sumOfAngles = calsumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        outputEle.innnerText = "Good, The angles form a triangle.";
    }
    else{
        outputEle.innnerText = "Sorry, These angles do not form a triangle." ;
    }
}

isTriangleBtn.addEventListener("click", isTriangle)