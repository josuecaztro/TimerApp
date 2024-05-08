//ALL DOM ELEMENTS
let timerDisplay = document.querySelector("#timer-display");
let timerContainer = document.querySelector("#timer-container");
let startButton = document.querySelector("#start-button");
let stopButton = document.querySelector("#stop-button");
let resetButton = document.querySelector("#reset-button");


//DECLARE ALL IMPORTANT VARIABLES
let interval;
let second = 0;
let minute = 0;
let hour = 0;

//this function makes the Timer display numbers PROPERLY (keep this)
function fixNumberDisplay (number){
    if (number < 10){
        let newNumber = "0" + number;
        return newNumber;
    } else {
    return number;
    };
}

//THIS IS THE MOST IMPORTANT FUNCTION WITH THE MOST LOGIC
function startCounter (){
   interval = setInterval(function(){
    if (second < 60){
        /*it took me forever to figure out the bug on why
        it was skipping the number 9. long story short: i had 
        to turn the (i++) into a (++i) because (i) was getting used
        in the expression before it could be displayed. */
    timerDisplay.textContent = fixNumberDisplay(hour) + ":" + fixNumberDisplay(minute) + ":" + fixNumberDisplay(++second);
    }
    //this adds a minute every 60 seconds
    if (second === 60){
        ++minute;
        timerDisplay.textContent = fixNumberDisplay(hour) + ":" + fixNumberDisplay(minute) + ":" + fixNumberDisplay(0);
        second = 0;
    }
    //this adds an hour every 60 minutes
    if (minute === 60){
        ++hour;
        timerDisplay.textContent = fixNumberDisplay(hour) + ":" + fixNumberDisplay(0) + ":" + fixNumberDisplay(0);
        minute = 0;
    }
   }, 1000);

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


