var flowerButtons = document.getElementsByClassName("flowerButtons");

function addPoints() {
    var points = document.getElementById('points');
    var newPoints = points.value + 10;
    console.log(newPoints);
    flowerButtons.addEventListener("click", addPoints);
}
