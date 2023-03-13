
// FROM HTML:::::::::::::::::
const questionBtn = document.querySelector(".question-btn");
const questionDiv = document.querySelector(".question-div");
questionDiv.style.display = "none";
const pointsNumber = document.querySelector(".points-number");
const questionsNumber = document.querySelector(".questions-number");
//____________________________________________________________ 
let number = 0;
let count = 0
pointsNumber.textContent = 0;
questionsNumber.textContent = count;
let currentQuestion = "";
let index;
// ------------------------------------------------

// draw quetion from array,  invoke createAnswersBtns()::::
const selectQuestion = () => {
    // questions data kept in questions.js files::::::
    // check if question was used before:
    // draw random question from array and add question text to div:
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionDiv.style.display = "block";
    questionDiv.textContent = currentQuestion.question;
    createAnswersBtns();

// -----------------------------------------------------------
    console.log(currentQuestion);
    console.log(questions);
    // pobranie indexu array wylosowanego pytania::::
    index = questions.indexOf(currentQuestion);
    // delete from array by index (so questions aren't repeating):::::::
    questions.splice(index, 1);
    // add deleted question to temporary array
    tempArray.push(currentQuestion)

    if (questions.length === 0) {
        questionDiv.textContent = "The End"
        questionBtn.disabled = true;
        return
    }

}

// create answers buttons:
const createAnswersBtns = function() {

    for(let i=0; i<4; i++){
        let button = document.createElement("button");
        questionDiv.appendChild(button);
        button.classList.add("answer-button")
        button.textContent = currentQuestion.answers[i].text;
        // if answer is correct::::::
        button.addEventListener("click", checkAnswer = () => {
            if (currentQuestion.answers[i].correct === true) {
                number++;
                count++
                pointsNumber.textContent = number;
                questionsNumber.textContent = count;
                questionDiv.textContent = "Brawo!"
            } else {
                count++
                questionsNumber.textContent = count;
                questionDiv.textContent = "Zła odpowiedź!"
            }
        })
    }
}

questionBtn.addEventListener("click", selectQuestion)