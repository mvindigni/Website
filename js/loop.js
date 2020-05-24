var points = 0;

function pointClick(number){
    points += number;
    document.getElementById('points').innerHTML = points + " POINTS";
};

function addPoints(number){
    points += number;
    document.getElementById('points').innerHTML = points + " POINTS";
}

var machines = 0;
var machineRate = 5;

function buyMachine(){
    var machineCost = Math.floor(20 * Math.pow(1.5, machines));
    if(points >= machineCost){
        machines += 1;
        points -= machineCost;
        document.getElementById('machines').innerHTML = machines;
        document.getElementById('points').innerHTML = points;
        document.getElementById('pps').innerHTML = (machines*machineRate).toString() + " points per second";
    };

    var nextCost = Math.floor(20 * Math.pow(1.1, machines));
    document.getElementById('machineCost').innerHTML = nextCost.toString() + " POINTS";
}

window.setInterval(function(){

    addPoints(machines*machineRate)

}, 1000);