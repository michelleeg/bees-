var ernestoTheBee = document.getElementById("ernesto");
var container = document.getElementById("container");
var movemouse = document.getElementById("movemouse");
container.addEventListener("mousemove", moveErnesto);

function moveErnesto(event) {
    var xPosition = event.clientX - container.getBoundingClientRect().left - (ernestoTheBee.clientWidth / 2);
    var yPosition = event.clientY - container.getBoundingClientRect().top - (ernestoTheBee.clientHeight / 2);
    // in case of a wide border, the boarder-width needs to be considered in the formula above
    ernestoTheBee.style.left = xPosition + "px";
    ernestoTheBee.style.top = yPosition + "px";
}


var playButton = document.getElementById("startGameButton");
var rulesModal = document.getElementById("rules");

function closeRulesModal() {
    rulesModal.style.display = "none";
}
playButton.addEventListener("click", closeRulesModal);





var playAgainButton = document.getElementById("playAgainButton");
var endGameModal = document.getElementById("endGame");
var startingPoints = Number(document.getElementById('points').innerHTML);

function playAgainModal() {
    endGameModal.style.display = "block";
}

function closeGameOverModal() {
    endGameModal.style.display = "none";
    startingPoints = 0;
    document.getElementById('points').innerHTML = startingPoints;
}
playAgainButton.addEventListener("click", closeGameOverModal);
