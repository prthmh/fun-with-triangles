const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEle = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];

function calculateScore(){
    let score = 0;
    let i=0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[i]){
            score++;
        }
        i++;
    }
    outputEle.innerText = "Your score is " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);