
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


// >>>>

questionBtn.addEventListener("click", selectQuestion)