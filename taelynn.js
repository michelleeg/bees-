var flowerButtons = document.getElementsByClassName("flower");
addPoints = function(event) {
    var startingPoints = Number(document.getElementById('points').innerHTML);
    startingPoints = startingPoints + 10;
    console.log(startingPoints);
    document.getElementById('points').innerHTML = startingPoints;
}
flowerButtons[0].addEventListener('click', addPoints);


for (var i = 0; i < flowerButtons.length; i++) {
    flowerButtons[i].addEventListener('click', addPoints, true);
    console.log(i);
}
///addPoints();



/// clicking on ernesto
document.getElementById('ernesto').addEventListener('click', function (){
    console.log("click");
});
