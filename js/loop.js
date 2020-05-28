import * as math from "./math.js"

/**
 * @Event User clicks on CLICK ME button
 * adds points based on player's click power
 */
export function pointClick(){
    player.points += player.clickPower;
    $('#points').text(player.points + " POINTS");
};
window.pointClick = pointClick;

/**
 * @Event User clicks on BUY POINT MACHINE button
 * Subtracts points from user's balance based on machine cost, updates next machine cost
 */
export function buyMachine(){
    if(player.points >= player.machine_cost){
        player.machines += 1;
        player.points -= player.machineCost;
        $('#points').text(player.points + " POINTS");
        $('#machines').text(player.machines + " MACHINES");
    };
    player.machine_cost = Math.floor(20 * Math.pow(1.5, player.machines));
    $('machineCost').text(player.machineCost + " POINTS");
}
window.buyMachine = buyMachine;

/**
 * @Event User clicks on BUY POINT PRESS button
 * Subtracts points from user's balance based on press cost, updates next press cost
 */
export function buyPointPress(){
    if(player.points >= player.pressCost){
        player.presses += 1;
        player.points -= player.pressCost;
        $('#points').text(player.points + " POINTS");
        $('#pointPresses').text(player.presses + " POINT PRESSES");
    }
    player.press_cost = Math.floor(20 * Math.pow(1.5, player.presses));
    $('#pointPressCost').text(player.pressCost + " POINTS");
}
window.buyPointPress = buyPointPress;

/**
 * Game Loop
 * Update users points and points per second every 1000 milliseconds
 */
window.setInterval(() => math.updatePoints(), 1000);