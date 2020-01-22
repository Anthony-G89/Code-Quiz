var startButton= document.querySelector('#start-button');
var questionContaioner= document.querySelector('#question-container');
var timer= document.querySelector('#count-down');
var count= 10;




startButton.addEventListener("click",startGame)

function startGame(){
startButton.classList.add('hide');
questionContaioner.classList.remove('hide');
timer.classList.remove ('hide');

 interval= setInterval(function(){
     count -= 1;
     //for( var i=0; i<count; i--)
     timer.textContent= ("TIMER: " + count);

     if(count === 0){
         clearInterval();
     };
    
    
},1000);
}

function timer(){
    
}

function setNextQuestion(){

}


function selectAnswer(){

}
