import * as math from "./math.js"

/**
 * @Event Onload event
 * Hides prestige button
 */
window.addEventListener("load", function(){
    $("#prestige").hide();
    $("#prestigePoints").hide();
})

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
 * @Event User clicks on a button used to purchase passive point generation
 * Subtracts points from user's balance based on cost and updates next cost
 */
export function generatorClick(){

    $(function(){

        //Gives you the data-pointGenerator value for this button ie "presses" or "machines"
        $(".purchaseButton").on("click", function(){
        let pointGenerator = $(this).attr("data-pointGenerator");

        if(player.points >= player[pointGenerator + "Cost"]){
            player[pointGenerator]++;
            player.points -= player[pointGenerator + "Cost"];
            $("#points").text(player.points + " POINTS");
            $("#" + pointGenerator).text(player[pointGenerator] + " POINT " +  pointGenerator.toUpperCase())
            player[pointGenerator + "Cost"] = Math.floor(player[pointGenerator + "BaseCost"] * 1.5**player[pointGenerator]);
            $("#" + pointGenerator + "Cost").text(player[pointGenerator + "Cost"] + " POINTS");
        }
        });


    });

}
window.generatorClick = generatorClick;

/**
 * Game Loop
 * Update users points and points per second every 1000 milliseconds
 */
window.setInterval(() => math.updatePoints(), 1000);