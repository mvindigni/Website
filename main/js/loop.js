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
export function generatorClick(pointGenerator){
    if(player.points >= player[pointGenerator + "Cost"]){
        player[pointGenerator] = player[pointGenerator] + 1;
        player.points -= player[pointGenerator + "Cost"];
        $("#points").text(player.points + " POINTS");
        $("#" + pointGenerator).text(player[pointGenerator] + " POINT " +  pointGenerator.toUpperCase())
        player[pointGenerator + "Cost"] = Math.floor(player[pointGenerator + "BaseCost"] * 1.5**player[pointGenerator]);
        $("#" + pointGenerator + "Cost").text(player[pointGenerator + "Cost"] + " POINTS");
    }
}
window.generatorClick = generatorClick;

export function buyPrestige(){
    player.prestigePoints = Math.floor(math.netRate() * 0.1);
    /**For each element with the class "purchaseButton", find the data-pointGenerator value and then use that to set the
    * player's values for that generator to 0 (for how many they own) and their base cost (for their cost).
    * Finally, change the html values for each item that is displayed
    */
    $(".purchaseButton").each(function(){
        player[($(this).attr("data-pointGenerator"))] = 0;
        player[($(this).attr("data-pointGenerator")) + "Cost"] =  player[($(this).attr("data-pointGenerator")) + "BaseCost"]
        $("#" + ($(this).attr("data-pointGenerator"))).text(player[($(this).attr("data-pointGenerator"))] + " POINT " +  ($(this).attr("data-pointGenerator")).toUpperCase());
        //Breaking the above line down with machines as an example: for every element with the id machines, change the text to be "the number of machines + "Point" + "machines"
         $("#" + ($(this).attr("data-pointGenerator")) + "Cost").text(player[($(this).attr("data-pointGenerator")) + "Cost"] + " POINTS");
    })


    player.points = 0;
    $("#points").text(player.points + " POINTS");
    $("#prestigePoints").show();
    $("#prestigePoints").text(player.prestigePoints + " PRESTIGE POINTS");
};

window.buyPrestige = buyPrestige;


/**
 * Game Loop
 * Update users points and points per second every 1000 milliseconds
 */
window.setInterval(() => math.updatePoints(), 1000);