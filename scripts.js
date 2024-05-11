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


      //Conditionals for TIMER COLOR ALERTS 
      if (hour === 1 && minute >= 30 && minute < 45){
        timerContainer.style.background = "rgb(211, 207, 112)";
       } else if (hour === 1 && minute >= 45) {
        timerContainer.style.background = "rgb(208, 60, 60)";
       } else if (hour === 1 && minute >= 50){
        //flashing red animation????!??!?
       } else if (hour === 2){
        clearInterval(interval);
        timerDisplay.classList.toggle("white-text");
        timerContainer.classList.toggle("flashing");
        } else {
        timerContainer.style.background = "rgb(0, 102, 0)";
       };

    if (second < 60){
        /*it took me forever to figure out the bug on why
        it was skipping the number 9. long story short: i had 
        to turn the (i++) into a (++i) because (i) was getting used
        in the expression before it could be displayed. */
        ++second;
    timerDisplay.textContent = fixNumberDisplay(hour) + ":" + fixNumberDisplay(minute);
    }
    //this adds a minute every 60 seconds
    if (second === 60){
        ++minute;
        timerDisplay.textContent = fixNumberDisplay(hour) + ":" + fixNumberDisplay(minute);
        second = 0;
    }
    //this adds an hour every 60 minutes
    if (minute === 60){
        ++hour;
        timerDisplay.textContent = fixNumberDisplay(hour) + ":" + fixNumberDisplay(0);
        minute = 0;
    }
   }, 1000);
   

 

}



/* ALMOST PERFECT JUST FIX IT SO IT DOESNT RETURN TO GREEN.
MAYBE JUST STOP AT 2 HOURS AND KEEP FLASHING.
Green = 1 hour and 30 minutes
Yellow = in between
Red = 1 hour and 45 minutes
*/




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


