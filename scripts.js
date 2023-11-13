// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let flightStatus = document.getElementById("flightStatus");
    let takeoff = document.getElementById("takeoff");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let background = document.getElementById("shuttleBackground");
    let land = document.getElementById("landing");
    let abort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let picture = document.getElementById("rocket");

    takeoff.addEventListener("click", function(event) {
        let response = window.confirm("Confirm that the shuttle is ready for take off.");
        if (response) {
            flightStatus.innerHTML = "Shuttle in flight";
            background.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10,000";
        }
    });

   land.addEventListener("click", function(event) {
    window.alert("The shuttle is landing. Landing gear engaged");
    flightStatus.innerHTML = "The shuttle has landed";
    background.style.backgroundColor = "green";
    shuttleHeight.innerHTML = "0";
   });
   
   abort.addEventListener("click", function(event) {
    let response = window.confirm("Confirm that you want to abort the mission");
    if (response) {
        flightStatus.innerHTML = "Mission aborted.";
        background.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    }
   });
   up.addEventListener("click", function(event) {
    picture.style.position = 'absolute';
    picture.position.left = 10;


   });


   });
