var points = 0;
var machines = 0;
var machineRate = 5;
var pointPresses = 0;
var pointPressRate = 20;

function pointClick(number){
    points += number;
    document.getElementById('points').innerHTML = points + " POINTS";
};

function addPoints(number){
    points += number;
    document.getElementById('points').innerHTML = points + " POINTS";
}

function buyMachine(){
    var machineCost = Math.floor(20 * Math.pow(1.5, machines));
    if(points >= machineCost){
        machines += 1;
        points -= machineCost;
        document.getElementById('points').innerHTML = points + " POINTS";
        document.getElementById('machines').innerHTML = machines + " MACHINES";
    };

    var nextCost = Math.floor(20 * Math.pow(1.5, machines));
    document.getElementById('machineCost').innerHTML = nextCost.toString() + " POINTS";
}

function buyPointPress(){
    var pointPressCost = Math.floor(100 * Math.pow(1.5,pointPresses));
    if(points >= pointPressCost){
        pointPresses += 1;
        points -= pointPressCost;
        document.getElementById('points').innerHTML = points + " POINTS";
        document.getElementById('pointPresses').innerHTML = pointPresses + " POINT PRESSES";
    }
    var nextCost = Math.floor(100 * Math.pow(1.5,pointPresses));
    document.getElementById('pointPressCost').innerHTML = nextCost + " POINTS";
}

window.setInterval(function(){

    addPoints(machines*machineRate + pointPresses * pointPressRate)
    document.getElementById('pps').innerHTML = Math.floor(machines*machineRate + pointPresses * pointPressRate) + " POINTS PER SECOND"

}, 1000);