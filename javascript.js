//add event listner to add key

let runningTotal = 0;

const addEvent = document.getElementById("add");
const clickerDisplay = document.querySelector(".numberDisplay");
const subtractEvent = document.getElementById("subtract");
const resetEvent = document.getElementById("reset");

function declareEventListeners () {
addEvent.addEventListener("click", function () {

    //Increment runningTotal by 1 each time it is clicked 
    runningTotal++;
    updateDisplay(runningTotal);
});

subtractEvent.addEventListener("click", function () {

    runningTotal--;
    updateDisplay(runningTotal);

})

resetEvent.addEventListener("click", function () {

    reset();

})




}

declareEventListeners();

function updateDisplay (runningTotal) {
    clickerDisplay.innerHTML = runningTotal;
}

function reset () {
    runningTotal = 0;
    updateDisplay(runningTotal);
}