var timer = document.querySelector("#timer");
var start = document.querySelector("#start");
var quiz = document.querySelector("#quiz");
var questionsElement = document.querySelector("#questions");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var results = document.querySelector("#results");


var runningQuestion = 0;
var count = 4;

var questions = [
    {
        question1: "What does HTML stand for __________.",
        choices: ["Hypertext Markup Language", "Hyper Mark Language", "JSON", "Height"],
         answer: "A"
    },
    {
        question2: "What does CSS stand for _____________.",
         choices: ["Cascading Style Sheets", "Cascading Sheets Style", "Cascading Sheep style", "Computer Style Sheets"],
         answer: "A"
    },
    {
        question3: "Choose the correct HTML element for the largest heading:",
        choices: ["<h6>", "<head>", "<heading>", "<h1>"],
        answer: "D"
    },
    {
        question4: "What is the correct JavaScript syntax to change the contact of the HTML element below?",
        choices: ["document.getElementById(\"demo\").innerHTML = Hello World!", "document.getElement(\"p\").innerHTML = Hello World!", "#demo.innerHTML = \"Hello World!;\"", "document.getElementByNamw(\"p\").innerHTML = Hello World!"],
        answer: "A"
    },
    {
        question5: "What is the correct HTML for referring to an external style sheet",
        choices: ["<stylesheet>mystyles.css</stylesheet>", "<style src= \"mystyle.css\">", "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">"],
        answer: "C"

        
    }
]




start.addEventListener("click",startGame)

function startGame(){
 interval= setInterval(function(){
     count -= 1;
     timer.textContent= ("TIMER: " + count);

     if(count === 0){
         clearInterval(interval);
     };
    

},1000);

start.style.display = 'none';


renderQuestion();

}

function renderQuestion(){
    var q = questions[runningQuestion];
    for(var i=0; i < q.choices.length; i++){
        
    }

    questionsElement.innerHTML = "<p>" + q.question1 + "</p>";
    choiceA.innerHTML = "<p>" + q.choices + "</p>";
    
    quiz.style.display= 'block';
   

    
}

function setNextQuestion(){

}


function selectAnswer(){

}













//startButton.classList.add('hide');
// questionContaioner.classList.remove('hide');
// timer.classList.remove ('hide');
// nextBtn.classList.remove('hide');
// introParagraph.classList.add('hide');

// var startButton= document.querySelector('#start-button');
// var questionContaioner= document.querySelector('#question-container');
// var timer= document.querySelector('#count-down');
// var nextBtn= document.querySelector('#next-button');
// var introParagraph= document.querySelector('#intro');
// var header= document.querySelector('#main');
// var count= 3;