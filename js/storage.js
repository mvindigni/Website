
export function save(){
    //clear old browser storage
    window.localStorage.clear();

    //Store player's points
    window.localStorage.setItem("points", player.points);

    //Store number of each point generator the player has
    $(".purchaseButton").each(function(){
        window.localStorage.setItem(
            $(this).attr("data-pointGenerator").toString(),
            player[($(this).attr("data-pointGenerator")).toString()]
        );
    });

    //Store player's prestige points
    window.localStorage.setItem("prestigePoints", player.prestigePoints);
}
window.save = save;

export function load(){
    //Check if user had prestige points
    $(function(){
        if(window.localStorage.getItem("prestigePoints") > 0 && window.localStorage.getItem("prestigePoints") != null){
            $("#prestigePoints").show();
        }
    })

    //Get saved points
    player.points = parseInt(window.localStorage.getItem("points"));

    // Get saved point generator amounts
    $(".purchaseButton").each(function() {
        player[$(this).attr("data-pointGenerator")] =
        window.localStorage.getItem($(this).attr("data-pointGenerator").toString());
        $("#" + $(this).attr("data-pointGenerator")).text(
            player[($(this).attr("data-pointGenerator"))] + " POINT " +  ($(this).attr("data-pointGenerator")).toUpperCase()
        );
    });
    player.prestigePoints = window.localStorage.getItem("prestigePoints");
    $("#prestigePoints").text(player.prestigePoints + " PRESTIGE POINTS");
}
window.load = load;