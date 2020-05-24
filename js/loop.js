var points = 0;
var machines = 0;
var machineRate = 5;

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

window.setInterval(function(){

    addPoints(machines*machineRate)
    document.getElementById('pps').innerHTML = Math.floor(machines*machineRate) + " POINTS PER SECOND"

}, 1000);