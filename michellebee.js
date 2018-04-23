var container = {x: 100, y: 0, width: 900, height: 600};
var ernesto = {x: 428, y: 530, width: 45, height: 45};
var cloud1 = {x: 2.5, y: 0, width: 120, height: 90};
var cloud2 = {x: 102.5, y: 775, width: 120, height: 90};
var cloud3 = {x: 202.5, y: 0, width: 120, height: 90};
var cloud4 = {x: 302.5, y: 775, width: 120, height: 90};

if (ernesto.x < cloud1.x + cloud1.width && ernesto.x + ernesto.width > cloud1.x && ernesto.y < cloud1.y + cloud1.height && ernesto.height + ernesto.y > cloud1.y) {

}
var ernestoTheBee = document.getElementById("ernesto");
var container = document.getElementById("container");
var movemouse = document.getElementById("movemouse");
//container.addEventListener("mousemove", moveErnesto);
var beeposition = document.getElementById("beeposition");
container.addEventListener("mousemove", ernestoPosition);

function ernestoPosition(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    beeposition.textContent = mouseX + ", " + mouseY;
}

function getPosition(cloud1) {
    var p
}
