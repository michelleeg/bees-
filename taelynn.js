var flowerButtons = document.getElementsByClassName("flower");
var beeHive = document.getElementById("beehive");

for (var i = 0; i < flowerButtons.length; i++) {
    flowerButtons[i].addEventListener('click', addPoints, true);
}

function addPoints(event) {
    var startingPoints = Number(document.getElementById('points').innerHTML);
    startingPoints = startingPoints + 10;
    document.getElementById('points').innerHTML = startingPoints;
}
function addBeeHivePoints (event) {
    var startingPoints = Number(document.getElementById('points').innerHTML);
    startingPoints = startingPoints + 50;
    document.getElementById('points').innerHTML = startingPoints;
}
beeHive.addEventListener("click", addBeeHivePoints);
