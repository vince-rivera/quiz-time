//create a countdown timer for quiz
let sec = 300;
//create variable to store score for player
let playerScore = 0;
let currentQuestion = 0;
//start button needed to start quiz
//when the start button is CLICKED start timer

//display question and answer choices
var questionData = [
    {
        id: 1,
        question: "What tag is used to put JavaScript inside HTML?",
        optionA: "<src>",
        optionB: "<scripting>",
        optionC: "<script>",
        optionD: "<js>",
        correctAnswer: "<script>"
    },
    {
        id: 2,
        question: "Where is the correct place to insert a JavaScript source?",
        optionA: "A div",
        optionB: "the <head>",
        optionC: "the <footer>",
        optionD: "at the end of the <body>",
        correctAnswer: "the <head>"
    },
    {
        id: 3,
        question: "What is the correct syntax for a function?",
        optionA: "function myFunction()",
        optionB: "function:myfunction()",
        optionC: "function = myFFunction()",
        optionD: "function {}",
        correctAnswer: "function myFunction()"
    },
    {
        id: 4,
        question: "How do you start a while loop?",
        optionA: "while (i<=10)",
        optionB: "idk this is hard",
        optionC: "while i=10",
        optionD: "while (i<= 10; i++)",
        correctAnswer: "while (i<= 10; i++)"
    },
    {
        id: 5,
        question: "How do you comment out code in a HTML file?",
        optionA: "//this is a comment",
        optionB: "`this is a comment`",
        optionC: "<!--this is a comment-->",
        optionD: "/* this is a comment*/",
        correctAnswer: "<!--this is a comment-->"
    }
];

function startQuiz() {
    setQuestion();
    timer();
    document.getElementById("startQuizDiv").style.display = "none";
    document.getElementById("quizDiv").style.display = "block";

    setClickEvents();
}

function setClickEvents() {
    //Button for Option A
    document.getElementById("optionA").addEventListener("click", function (event) {
        event.preventDefault();
        answerHandler(event.target.value);
    });
    //Button for Option B
    document.getElementById("optionB").addEventListener("click", function (event) {
        event.preventDefault();
        answerHandler(event.target.value);
    });
    //Button for Option C
    document.getElementById("optionC").addEventListener("click", function (event) {
        event.preventDefault();
        answerHandler(event.target.value);
    });
    //Button for Option D
    document.getElementById("optionD").addEventListener("click", function (event) {
        event.preventDefault();
        answerHandler(event.target.value);
    });
}

function answerHandler(value) {
    if (value === questionData[currentQuestion].correctAnswer) {
        playerScore++;
        document.getElementById('output').innerHTML = "CORRECT!";
    }
    else {
        sec -= 5;
        document.getElementById('output').innerHTML = "INCORRECT!";
    }
    currentQuestion++;

    if (currentQuestion < 5) setQuestion();
    else endQuiz();
}

function setQuestion() {
    document.getElementById("question").innerHTML = questionData[currentQuestion].question;
    document.getElementById("optionA").value = questionData[currentQuestion].optionA;
    document.getElementById("optionB").value = questionData[currentQuestion].optionB;
    document.getElementById("optionC").value = questionData[currentQuestion].optionC;
    document.getElementById("optionD").value = questionData[currentQuestion].optionD;
}

function timer() {
    var countdownTimer = setInterval(function () {
        document.getElementById('quizTimerDisplay').innerHTML = `Time remaining: ${sec} seconds`;
        sec--;
        if (sec < 0) {
            clearInterval(countdownTimer);
            alert("Out of time!");
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    document.getElementById("quizDiv").style.display = "none";
    document.getElementById("outputDiv").style.display = "block";
    highScoreHandler();
}

function highScoreHandler() {
    //prompt user for initials
    var initials = window.prompt('Enter initials');
    //pull player score from local storage
    var highScores = JSON.parse(localStorage.getItem('HighScores'));
    //give each player and score an ID
    var id = Math.floor(Math.random() * 10000);

    // if there is nothing in local storage, default to empty array
    if (!highScores) highScores = []; 
    //Push player initials and score into the highscores array
    highScores.push({ 'id': id, 'initials': initials, 'score': playerScore })
    //set new score into array with others
    localStorage.setItem('HighScores', JSON.stringify(highScores));


// function selectAnswer() {
//     document.getElementById("optionA").innerHTML = questionData[currentQuestion].optionA;
//     document.getElementById("optionB").innerHTML = questionData[currentQuestion].optionB;
//     document.getElementById("optionC").innerHTML = questionData[currentQuestion].optionC;
//     document.getElementById("optionD").innerHTML = questionData[currentQuestion].optionD;
//     document.getElementById("optionA").addEventListener("click", function(event) {
//         event.preventDefault();
        
//         //IF the answer is incorrect make timer lose "x" seconds
//         if (questionData[0].correctAnswer !== "optionA") {
//             sec -= 5;
//              //Else display Incorrect
//             document.getElementById('output').innerHTML= "INCORRECT!"
//         }
//         //ELSE continue with the quiz as normal and increase score by 1.
//         else {
//             playerScore+1;
//         //Display if answer choice was "Correct"
//         document.getElementById('output').innerHTML= "CORRECT!";
//         }
//         //Go to next question
//         currentQuestion++;
       
//     })
//     //Button for Option B
//     document.getElementById("optionB").addEventListener("click", function() {
//         if (questionData[0].correctAnswer !== "optionB") {
//             sec-5;
//             document.getElementById('output').innerHTML= "INCORRECT!"
//         }
//         else {
//             playerScore+1;
//         document.getElementById('output').innerHTML= "CORRECT!"
//         }
//         currentQuestion++;
//     })
//     //Button for Option C
//     document.getElementById("optionC").addEventListener("click", function() {
//         if (questionData[0].correctAnswer !== "optionC") {
//             sec-5;
//             document.getElementById('output').innerHTML= "INCORRECT!"
//         }
//         else {
//             playerScore+1;
//         document.getElementById('output').innerHTML= "CORRECT!"
//         }
//         currentQuestion++;
//     })
//     //Button for Option D
//     document.getElementById("optionD").addEventListener("click", function() {
//         if (questionData[0].correctAnswer !== "optionD") {
//             sec-5;
//             document.getElementById('output').innerHTML= "INCORRECT!"
//         }
//         else {
//             playerScore+1;
//         document.getElementById('output').innerHTML= "CORRECT!"
//         }
//         currentQuestion++;
//     })
// }



//display question and answer choices

//end test IF timer reaches 0 or user completes all questions
//display score
//let user input initials and save to local storage


//DISPLAY NONE QUIZ AT START AFTER START BUTTON IS HIT DISPLAY BLOCK