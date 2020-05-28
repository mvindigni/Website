import * as math from "./math.js"

export function pointClick(){
    player.points += player.clickPower;
    document.getElementById('points').innerHTML = player.points + " POINTS";
};

window.pointClick = pointClick;

export function buyMachine(){
    if(player.points >= player.machine_cost){
        player.machines += 1;
        player.points -= player.machineCost;
        document.getElementById('points').innerHTML = player.points + " POINTS";
        document.getElementById('machines').innerHTML = player.machines + " MACHINES";
    };
    player.machine_cost = Math.floor(20 * Math.pow(1.5, player.machines));
    document.getElementById('machineCost').innerHTML = player.machineCost + " POINTS";
}

window.buyMachine = buyMachine;

export function buyPointPress(){
    if(player.points >= player.pressCost){
        player.pointPresses += 1;
        player.points -= player.pressCost;
        document.getElementById('points').innerHTML = player.points + " POINTS";
        document.getElementById('pointPresses').innerHTML = player.presses + " POINT PRESSES";
    }
    player.press_cost = Math.floor(20 * Math.pow(1.5, player.presses));
    document.getElementById('pointPressCost').innerHTML = player.pressCost + " POINTS";
}

window.buyPointPress = buyPointPress;

window.setInterval(function(){
    player.points += math.netRate()
    document.getElementById('pps').innerHTML = math.netRate() + " POINTS PER SECOND"
    document.getElementById('points').innerHTMl = player.points;
}, 1000);

