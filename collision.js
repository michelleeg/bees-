/*var container = {x: 100, y: 0, width: 900, height: 600};
var ernesto = {x: 428, y: 530, width: 45, height: 45};
var cloud1 = {x: 2.5, y: 0, width: 120, height: 90};
var cloud2 = {x: 102.5, y: 775, width: 120, height: 90};
var cloud3 = {x: 202.5, y: 0, width: 120, height: 90};
var cloud4 = {x: 302.5, y: 775, width: 120, height: 90};

if (ernesto.x < cloud1.x + cloud1.width && ernesto.x + ernesto.width > cloud1.x && ernesto.y < cloud1.y + cloud1.height && ernesto.height + ernesto.y > cloud1.y) {

}*/
var ernestoTheBee = document.getElementById("ernesto");
var container = document.getElementById("container");
var movemouse = document.getElementById("movemouse");
//container.addEventListener("mousemove", moveErnesto);
var beeposition = document.getElementById("beeposition");
container.addEventListener("mousemove", ernestoPosition);
var cloud1position = document.getElementById("cloud1position")
var cloud1_current_pos = 0;
var cloud2position = document.getElementById("cloud2position")
var cloud2_current_pos = 0;
var cloud3position = document.getElementById("cloud3position")
var cloud3_current_pos = 0;
var cloud4position = document.getElementById("cloud4position")
var cloud4_current_pos = 0;


function ernestoPosition(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    if ((mouseX > cloud1_current_pos && (mouseX < cloud1_current_pos + 120)) && (mouseY > 100 && mouseY < 190)) {
        playAgainModal();
    }
   if ((mouseX > cloud2_current_pos && (mouseX < cloud2_current_pos + 120)) && (mouseY > 200 && mouseY < 290)) {
        playAgainModal();
    }
    //cloud1position.textContent = "[X]";
    if ((mouseX > cloud3_current_pos && (mouseX < cloud3_current_pos + 120)) && (mouseY > 300 && mouseY < 390)) {
        playAgainModal();
    }
    if ((mouseX > cloud4_current_pos && (mouseX < cloud4_current_pos + 120)) && (mouseY > 400 && mouseY < 490)) {
        playAgainModal();
    }

}

function myMove(event) {
    var max = 800;
    var cloud1_pos = 0;
    var cloud1_sop = max;
    var cloud1_elem = document.getElementById("cloud1");
    var cloud2_pos = 775;
    var cloud2_sop = max;
    var cloud2_elem = document.getElementById("cloud2");
    var cloud3_pos = 0;
    var cloud3_sop = max;
    var cloud3_elem = document.getElementById("cloud3");
    var cloud4_pos = 775;
    var cloud4_sop = max;
    var cloud4_elem = document.getElementById("cloud4");
    var id = setInterval(frame, 1);
    function frame() {
        if (cloud1_pos == max) {
            cloud1_sop--;
            cloud1_elem.style.left = cloud1_sop + 'px';
            if (cloud1_sop == 0) {
                cloud1_pos = 0;
                cloud1_sop = max;
            }
            cloud1_current_pos = cloud1_sop;
        } else {
            cloud1_pos++;
            cloud1_elem.style.left = cloud1_pos + 'px';
            cloud1_current_pos = cloud1_pos;
        }

        if (cloud2_pos == max) {
            cloud2_sop--;
            cloud2_elem.style.left = cloud2_sop + 'px';
            if (cloud2_sop == 0) {
                cloud2_pos = 0;
                cloud2_sop = max;
            }
            cloud2_current_pos = cloud2_sop;
        } else {
            cloud2_pos++;
            cloud2_elem.style.left = cloud2_pos + 'px';
            cloud2_current_pos = cloud2_pos;
        }

        if (cloud3_pos == max) {
            cloud3_sop--;
            cloud3_elem.style.left = cloud3_sop + 'px';
            if (cloud3_sop == 0) {
                cloud3_pos = 0;
                cloud3_sop = max;
            }
            cloud3_current_pos = cloud3_sop;
        } else {
            cloud3_pos++;
            cloud3_elem.style.left = cloud3_pos + 'px';
            cloud3_current_pos = cloud3_pos;
        }

        if (cloud4_pos == max) {
            cloud4_sop--;
            cloud4_elem.style.left = cloud4_sop + 'px';
            if (cloud4_sop == 0) {
                cloud4_pos = 0;
                cloud4_sop = max;
            }
            cloud4_current_pos = cloud4_sop;
        } else {
            cloud4_pos++;
            cloud4_elem.style.left = cloud4_pos + 'px';
            cloud4_current_pos = cloud4_pos;
        }
    }
}

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
playAgainButton.addEventListener("click", myMove(event));
