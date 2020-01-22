var startButton= document.querySelector('#start-button');
var questionContaioner= document.querySelector('#question-container');
var timer= document.querySelector('#count-down');
var count= 10;



startButton.addEventListener("click",startGame)

function startGame(){
startButton.classList.add('hide');
questionContaioner.classList.remove('hide');
 interval= setInterval(function(){
     count -= 1;
     timer.textContent= ("timer: " + count);

     if(count === 0){
         clearInterval("Time is up");
     };
    
    
},1000);


}

function timer(){
    if(count === 0){
        clearInterval(count);
    }
}

function setNextQuestion(){

}


function selectAnswer(){

}
