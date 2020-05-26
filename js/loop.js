let points = 0;
let machines = 0;
let machineRate = 5;
let machineBaseCost = 20;
let machineCost = machineBaseCost;
let pointPresses = 0;
let pointPressRate = 20;
let pointPressBaseCost = 100;
let pointPressCost = pointPressBaseCost;
let clickRate = 1;
let prestigePoints = 0;
let pointsPerSecond = (machines * machineRate + pointPresses * pointPressRate) * (1 + prestigePoints * 0.1);
let prestigeNotUnlocked = true;

function hidePrestige(){
    document.getElementById("prestige").style.display = "none";
    document.getElementById("prestigePoints").style.display = "none";
}

function pointClick(number){
    points += number;
    document.getElementById('points').innerHTML = points + " POINTS";
};

function addPoints(number){
    points += number;
    document.getElementById('points').innerHTML = points + " POINTS";
}

function buyMachine(){

    if(points >= machineCost){
        machines += 1;
        points -= machineCost;
        document.getElementById('points').innerHTML = points + " POINTS";
        document.getElementById('machines').innerHTML = machines + " MACHINES";
    };

    machineCost = Math.floor(machineBaseCost * Math.pow(1.5, machines));
    document.getElementById('machineCost').innerHTML = machineCost + " POINTS";
}

function buyPointPress(){
    pointPressCost = Math.floor(pointPressBaseCost * Math.pow(1.5,pointPresses));

    if(points >= pointPressCost){
        pointPresses += 1;
        points -= pointPressCost;
        document.getElementById('points').innerHTML = points + " POINTS";
        document.getElementById('pointPresses').innerHTML = pointPresses + " POINT PRESSES";
    }
    pointPressCost = Math.floor(pointPressBaseCost * Math.pow(1.5,pointPresses));
    document.getElementById('pointPressCost').innerHTML = pointPressCost + " POINTS";
}

function buyPrestige(){
    prestigePoints = Math.floor(pointsPerSecond / 10) + prestigePoints;
    points = 0;
    machines = 0;
    pointPresses = 0;
    machineCost = machineBaseCost;
    pointPressCost = pointPressBaseCost;



    document.getElementById('points').innerHTML = points + " POINTS";
    document.getElementById('machines').innerHTML = machines + " Machines";
    document.getElementById('pointPresses').innerHTML = pointPresses + " POINT PRESSES";
    document.getElementById('prestigePoints').innerHTML = prestigePoints + " PRESTIGE POINTS";
    document.getElementById('machineCost').innerHTML = machineCost + " POINTS";
    document.getElementById('pointPressCost').innerHTML = pointPressCost + " POINTS";
}


window.setInterval(function(){

    pointsPerSecond = (machines * machineRate + pointPresses * pointPressRate) * (1 + prestigePoints * 0.1);
    addPoints(pointsPerSecond)
    document.getElementById('pps').innerHTML = Math.floor(pointsPerSecond) + " POINTS PER SECOND"

    if(points >= 100 && prestigeNotUnlocked){
        document.getElementById("prestige").style.display = "block";
        document.getElementById("prestigePoints").style.display = "block";
        prestigeNotUnlocked = false;


        //Check to see if enough points have been acquired to unlock prestige, if so show prestige elements -> prestigeNotUnlocked changed to hopefully not run this section again?
    }
}, 1000);