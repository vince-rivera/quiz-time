//create a countdown timer for quiz
let sec = 300;
//create variable to store score for player
let playerScore = 0;
let currentQuestion = 0;
//start button needed to start quiz
document.getElementById('startbtn').addEventListener('click', function(event){
    event.preventDefault();
    timer;
})
//when the start button is CLICKED start timer
document.getElementById("questions").innerHTML = questionData[currentQuestion].question

function timer(){
    var countdownTimer = setInterval(function(){
        document.getElementById('quizTimerDisplay').innerHTML= sec;
        sec--;
        if (sec < 0) {
            clearInterval(countdownTimer);
        }
    }, 1000);
}
//display question and answer choices
var questionData = [
    {
        question:"This question",
        optionA:"This text",
        optionB:"This text",
        optionC:"This text",
        optionD:"This text",
        correctAnswer: "optionC"
    },
    {
        question:"",
        optionA:"",
        optionB:"",
        optionC:"",
        optionD:"",
        correctAnswer: ""
    },
    {
        question:"",
        optionA:"",
        optionB:"",
        optionC:"",
        optionD:"",
        correctAnswer: ""
    },
    {
        question:"",
        optionA:"",
        optionB:"",
        optionC:"",
        optionD:"",
        correctAnswer: ""
    },
    {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: ""
    }
];
document.getElementById("optionA").addEventListener("click", function(event) {
    event.preventDefault();
    //IF the answer is incorrect make timer lose "x" seconds
    if (questionData[0].correctAnswer !== "optionA") {
        sec-5;
         //Else display Incorrect
        document.getElementById('output').innerHTML= "INCORRECT!"
    }
    //ELSE continue with the quiz as normal and increase score by 1.
    else {
        playerScore+1;
    //Display if answer choice was "Correct"
    document.getElementById('output').innerHTML= "CORRECT!"
    }
    //Go to next question
    currentQuestion++;
   
})
document.getElementById("optionB").addEventListener("click", function() {
    if (questionData[0].correctAnswer !== "optionB") {
        sec-5;
        document.getElementById('output').innerHTML= "INCORRECT!"
    }
    else {
        playerScore+1;
    document.getElementById('output').innerHTML= "CORRECT!"
    }
    currentQuestion++;
})
document.getElementById("optionC").addEventListener("click", function() {
    if (questionData[0].correctAnswer !== "optionC") {
        sec-5;
        document.getElementById('output').innerHTML= "INCORRECT!"
    }
    else {
        playerScore+1;
    document.getElementById('output').innerHTML= "CORRECT!"
    }
    currentQuestion++;
})
document.getElementById("optionD").addEventListener("click", function() {
    if (questionData[0].correctAnswer !== "optionD") {
        sec-5;
        document.getElementById('output').innerHTML= "INCORRECT!"
    }
    else {
        playerScore+1;
    document.getElementById('output').innerHTML= "CORRECT!"
    }
    currentQuestion++;
})


//end test IF timer reaches 0 or user completes all questions
//display score
//let user input initials and save to local storage


//DISPLAY NONE QUIZ AT START AFTER START BUTTON IS HIT DISPLAY BLOCK