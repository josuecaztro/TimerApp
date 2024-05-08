//ALL DOM ELEMENTS
let timerDisplay = document.querySelector("#timer-display");
let timerContainer = document.querySelector("#timer-container");
let startButton = document.querySelector("#start-button");
let stopButton = document.querySelector("#stop-button");
let resetButton = document.querySelector("#reset-button");


//DECLARE ALL IMPORTANT VARIABLES
let interval;
let i = 0;
let minute = 0;
let hour = 0;
let displayMinute = "0" + minute;

//THIS IS THE MOST IMPORTANT FUNCTION WITH THE MOST LOGIC
function startCounter (){
   interval = setInterval(function(){
    if (i < 10){
        /*it took me forever to figure out the bug on why
        it was skipping the number 9. long story short: i had 
        to turn the (i++) into a (++i) because (i) was getting used
        in the expression before it could be displayed. */
    timerDisplay.textContent = fixNumberDisplay(hour) + ":" + fixNumberDisplay(minute) + ":" + fixNumberDisplay(++i);
    }
    if ((i >= 10 && i < 60) && minute <= 9){
        timerDisplay.textContent = "00:0" + minute + ":" + ++i;
    } else if ((i >= 10 && i < 60) && minute >= 10){
        timerDisplay.textContent = "00:" + minute + ":" + ++i;
    }

    //this adds a minute every 60 seconds
    if (i >= 59){
        i = 0;
        ++minute;
    }
    //this adds an hour every 60 minutes
    if (minute >= 59){
        minute = 0;
        ++hour;
    }


   }, 10);

   timerContainer.style.background = "rgb(85, 158, 85)";
   timerDisplay.style.color = "white";

}



//OTHER SHIT
function stopCounter (){
    clearInterval(interval);
}
function resetCounter (){
    location.reload();
}
startButton.addEventListener("click", startCounter);
stopButton.addEventListener("click", stopCounter);
resetButton.addEventListener("click", resetCounter);









//all theory down below



function fixNumberDisplay (number){
    if (number < 10){
        let newNumber = "0" + number;
        return newNumber;
    } else {
    return number;
    };
}